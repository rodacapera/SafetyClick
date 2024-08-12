import {useNavigation} from '@react-navigation/native';
import {getEmployeesFirebase} from '@src/hooks/firebase/employees/employees';
import {editFieldUserFirebase} from '@src/hooks/firebase/user/user';
import {HeaderShown} from '@src/hooks/navigator/headerShown';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {
  GetEmployeesQuery,
  GetUserQuery,
  SetEmployeesQuery
} from '@src/reactQuery/userQuery';
import {StackNavigation} from '@src/types/globalTypes';
import {User} from '@src/types/userTypes';
import {useEffect, useState} from 'react';
import {Platform, useColorScheme, useWindowDimensions} from 'react-native';

const EmployeesHook = () => {
  const navigation = useNavigation<StackNavigation>();
  const {dark, colors} = ActualTheme();
  const {width} = useWindowDimensions();
  const userData = GetUserQuery().data.user;
  const user = userData as unknown as User;
  const colorScheme = useColorScheme();
  const {data, isLoading} = GetEmployeesQuery();
  const {shop} = GetUserQuery().data.user as unknown as User;
  const employees = data as User[];
  const [visible, setVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemMustRemove, setItemMustRemove] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<string | undefined>();
  const [userRemoved, setUserRemoved] = useState(false);
  const [currentEmployees, setCurrentEmployees] = useState<User[]>([]);
  SetEmployeesQuery(currentEmployees);

  const removeItem = (user_uid: string) => {
    setItemToRemove(user_uid);
    setAlertVisible(true);
  };

  useEffect(() => {
    const sendToRemoveItem = (user_uid: string) => {
      editFieldUserFirebase(user_uid, {pay: false}).then(() => {
        setTimeout(() => {
          getEmployeesFirebase(shop)
            .get()
            .then(querySnapshot => {
              setCurrentEmployees([]);
              querySnapshot.forEach(value => {
                const data = value.data() as User;
                if (querySnapshot.size > 1) {
                  !data.administrator &&
                    setCurrentEmployees(prev => [...prev, data]);
                } else {
                  setCurrentEmployees([]);
                }
              });
            });
          setUserRemoved(true);
        }, 3000);
      });
    };
    itemMustRemove &&
      itemToRemove != undefined &&
      sendToRemoveItem(itemToRemove);
  }, [itemMustRemove, itemToRemove, shop]);

  useEffect(() => {
    setTimeout(() => {
      userRemoved && setUserRemoved(false);
    }, 2000);
  }, [userRemoved]);

  useEffect(() => {
    employees.length >= 1 && setCurrentEmployees(employees);
  }, [employees]);

  useEffect(() => {
    HeaderShown({
      navigation,
      width: width,
      visible: true,
      transparent: false,
      titleColor:
        Platform.OS == 'android'
          ? colorScheme === 'dark'
            ? '#a23234'
            : dark
            ? colors.onSurface
            : colors.onPrimaryContainer
          : colors.onPrimaryContainer
    });
  }, [
    colorScheme,
    colors.onPrimaryContainer,
    colors.onSurface,
    dark,
    navigation,
    width
  ]);

  return {
    employees: currentEmployees,
    visible,
    setVisible,
    alertVisible,
    removeItem,
    setAlertVisible,
    isLoading,
    modalVisible,
    setModalVisible,
    setItemMustRemove,
    user,
    dark,
    colors
  };
};

export {EmployeesHook};
