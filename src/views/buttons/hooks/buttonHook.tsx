import {useNavigation} from '@react-navigation/native';
import {removeButtonByIdFirebase} from '@src/hooks/firebase/buttons/buttons';
import {HeaderShown} from '@src/hooks/navigator/headerShown';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {statusDevice} from '@src/hooks/shellyActions';
import {
  GetButtonsQuery,
  GetUserQuery,
  SetButtonsQuery
} from '@src/reactQuery/userQuery';
import {ButtonFind, Buttons} from '@src/types/buttons';
import {StackNavigation} from '@src/types/globalTypes';
import {User} from '@src/types/userTypes';
import {useCallback, useEffect, useState} from 'react';
import {
  AppState,
  Platform,
  useColorScheme,
  useWindowDimensions
} from 'react-native';

const Buttonhook = () => {
  const navigation = useNavigation<StackNavigation>();
  const {dark, colors} = ActualTheme();
  const {width} = useWindowDimensions();
  const colorScheme = useColorScheme();
  const userData = GetUserQuery().data.user;
  const user = userData as unknown as User;
  const {isLoading, data} = GetButtonsQuery();
  const buttons = data as Buttons[];
  const [alertVisible, setAlertVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [buttonFind, setButtonFind] = useState<ButtonFind>();
  const [refreshing, setRefreshing] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<string>();
  const [sendRemoveItem, setSendRemoveItem] = useState(false);
  const [newButtons, setNewButtons] = useState<Buttons[]>(buttons);
  SetButtonsQuery(newButtons);

  const getDevice = useCallback(() => {
    statusDevice().then(result => {
      if (result) {
        setButtonFind({
          isValid: result.is_valid,
          connected: result.wifi_sta.connected,
          ip: result.wifi_sta.ip
        });
      } else {
        !buttonFind &&
          setButtonFind({isValid: false, connected: false, ip: ''});
      }
    });
  }, [buttonFind]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    !refreshing &&
      setTimeout(() => {
        setRefreshing(false);
        buttonFind && buttonFind.ip == '' ? getDevice() : setButtonFind(null);
      }, 2000);
  }, [buttonFind, getDevice, refreshing]);

  const removeItem = (index: string) => {
    setItemToRemove(index);
    setAlertVisible(true);
  };

  const removeButton = useCallback(() => {
    if (itemToRemove) {
      removeButtonByIdFirebase(itemToRemove)
        .then(() => {
          const newButtons = [...buttons];
          const resultFilter = newButtons.filter(
            value => value.uid != itemToRemove
          );
          setNewButtons(resultFilter);
        })
        .catch(err => console.debug(err));
    }
  }, [buttons, itemToRemove]);

  useEffect(() => {
    setTimeout(() => {
      buttons.length > 0 && setNewButtons(buttons);
    }, 1000);
  }, [buttons]);

  useEffect(() => {
    sendRemoveItem && removeButton();
  }, [removeButton, sendRemoveItem]);

  useEffect(() => {
    !buttonFind && getDevice();
  }, [buttonFind, getDevice]);

  useEffect(() => {
    const appMode = AppState.addEventListener(
      'change',
      value => value === 'active' && getDevice()
    );
    return () => appMode.remove();
  }, [getDevice]);

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
    alertVisible,
    setAlertVisible,
    removeItem,
    buttons: newButtons,
    visible,
    setVisible,
    isLoading,
    data,
    buttonFind,
    onRefresh,
    refreshing,
    setButtonFind,
    setSendRemoveItem,
    setNewButtons,
    user,
    colors,
    dark
  };
};
export {Buttonhook};
