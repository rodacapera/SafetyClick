import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {userFakeData} from '@src/globals/constants/fakeData';
import {buttonActionInitialState} from '@src/globals/constants/login';
import {
  editUserFirebase,
  getUserByPhoneNumberFirebase
} from '@src/hooks/firebase/user/user';
import {HeaderShown} from '@src/hooks/navigator/headerShown';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {
  GetShopQuery,
  GetUserQuery,
  UpdateUserQuery
} from '@src/reactQuery/userQuery';
import {DrawerActions, StackActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {StackNavigation} from '@src/types/globalTypes';
import {LoginFormAction} from '@src/types/loginTypes';
import {DataKey, Shop, User} from '@src/types/userTypes';
import {QueryCache} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {Platform, useColorScheme, useWindowDimensions} from 'react-native';

const UserFormHook = (qr?: boolean, shopId?: string) => {
  const navigation = useNavigation<StackNavigation>();
  const queryCache = new QueryCache();

  const {width} = useWindowDimensions();
  const {dark, colors, theme} = ActualTheme();
  const colorScheme = useColorScheme();
  const os = Platform.OS;

  const userData = GetUserQuery();
  const shopData = GetShopQuery();

  const {isLoading, error, mutate, data} = UpdateUserQuery();

  const [user, setUser] = useState<User>();
  const [shop, setShop] = useState<Shop>();
  const [alertUserExist, setAlertUserExist] = useState(false);
  const [currentButtonAction, setCurrentButtonAction] =
    useState<LoginFormAction>(buttonActionInitialState);
  const [tokenPush, setTokenPush] = useState<string>();
  const [alertRemoveUser, setAlertRemoveUser] = useState(false);
  const [actionRemoveUser, setActionRemoveUser] = useState(false);

  const removeAccount = () => {
    const userClone = {...user};
    userClone.pay = false;
    editUserFirebase(userClone as User).then(() => {
      auth()
        .signOut()
        .then(async () => {
          queryCache.clear();
          await AsyncStorage.multiRemove(['@otp', '@userAuth']);
          navigation.dispatch(DrawerActions.closeDrawer());
          navigation.dispatch(StackActions.replace('LoginSplash'));
          setAlertRemoveUser(false);
        })
        .catch(async error => {
          console.debug(error);
        });
    });
  };

  const getDevice = async () => {
    const device = await AsyncStorage.getItem('@fcmToken');
    device && setTokenPush(device);
  };

  const handleEditUser = () => {
    if (qr && tokenPush) {
      const phone = user ? user.phone : '';
      const userExist = getUserByPhoneNumberFirebase(phone);
      userExist.then(querySnapshot => {
        if (querySnapshot.empty) {
          const userClone = {...user};
          userClone.address = shop?.address;
          userClone.administrator = false;
          userClone.alias = shop?.alias;
          userClone.avatar = '';
          userClone.city = shop?.city;
          userClone.prefix = currentButtonAction.prefix;
          userClone.countryCode = shop?.countryCode;
          userClone.created = Date.now().toString();
          userClone.date = Date.now().toString();
          userClone.departament = shop?.department;
          userClone.devices = [{device: tokenPush, os}];
          userClone.location = shop?.location;
          userClone.shop = `shops/${shopId}`;
          userClone.type = 'residence';
          userClone.zipcode = shop?.zipcode;
          userClone.pay = true;
          userClone.group_name = shop?.group_name;
          userClone.group_number = shop?.group_number;
          navigation.push('Login', {qr, data: userClone as User});
        } else {
          setAlertUserExist(true);
        }
      });
    } else {
      user && mutate(user);
    }
  };

  const handleOnchangeInput = (text: never, key: DataKey) => {
    if (user) {
      const userClone = {...user};
      userClone[key] = text;
      setUser(userClone);
    } else {
      const newCurrentUser = {...userFakeData};
      newCurrentUser[key] = text;
      setUser(newCurrentUser);
    }
  };

  useEffect(() => {
    actionRemoveUser && removeAccount();
  }, [actionRemoveUser]);

  useEffect(() => {
    getDevice();
    if (currentButtonAction && shop) {
      const newCurrentUser = user ? {...user} : {...userFakeData};
      newCurrentUser.phone = currentButtonAction.phone;
      newCurrentUser.countryCode = shop.countryCode;
      setUser(newCurrentUser);
    }
  }, [currentButtonAction, shop]);

  useEffect(() => {
    data && setUser(data);
  }, [data]);

  useEffect(() => {
    !data && !qr && userData.data && setUser(userData.data.user);
  }, [userData.data, data]);

  useEffect(() => {
    !shop && shopData.data && setShop(shopData.data as unknown as Shop);
  }, [shop, shopData]);

  useEffect(() => {
    user &&
      HeaderShown({
        navigation,
        width: !qr ? width : undefined,
        visible: qr ? false : true,
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
    navigation,
    dark,
    user,
    qr,
    width,
    colorScheme,
    colors.onSurface,
    colors.onPrimaryContainer
  ]);

  return {
    user,
    setCurrentButtonAction,
    handleOnchangeInput,
    handleEditUser,
    isLoading,
    error,
    shop,
    alertUserExist,
    setAlertUserExist,
    currentButtonAction,
    colors,
    dark,
    theme,
    alertRemoveUser,
    setAlertRemoveUser,
    setActionRemoveUser
  };
};
export {UserFormHook};
