import AsyncStorage, {
  useAsyncStorage
} from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import {DrawerActions, StackActions} from '@react-navigation/native';
import {avatar, avatar_w} from '@src/assets/images';
import {useGetUser} from '@src/hooks/user/useGetUser';
import {GetCompanyImagesQuery} from '@src/reactQuery/userQuery';
import {StackNavigation} from '@src/types/globalTypes';
import {Logos} from '@src/types/imageTypes';
import {useEffect, useState} from 'react';
import {ActualTheme} from './GlobalTheme';
import {QueryCache} from '@tanstack/react-query';

const DrawerComponentHook = (navigation: StackNavigation) => {
  const queryCache = new QueryCache();
  const {getItem} = useAsyncStorage('@theme'); //get global dark mode

  const {theme, dark, colors, setDarkTheme, setLightTheme} = ActualTheme();

  const {user, counterEmployees, counterButtons, isLoading, configuration} =
    useGetUser();

  const [isDark, setIsDark] = useState(false);
  const [logos, setLogos] = useState<Logos[]>([]);
  const setImages = GetCompanyImagesQuery();

  const onToggleSwitch = () => {
    setIsDark(!isDark);
    !isDark ? setDarkTheme() : setLightTheme();
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(async () => {
        queryCache.clear();
        await AsyncStorage.multiRemove(['@otp', '@userAuth']);
        navigation.dispatch(DrawerActions.closeDrawer());
        navigation.dispatch(StackActions.replace('LoginSplash'));
      })
      .catch(async error => {
        console.debug(error);
      });
  };

  const imageAvatar =
    user && user?.avatar
      ? {
          uri: user?.avatar
        }
      : dark
      ? avatar
      : avatar_w;

  useEffect(() => {
    logos.length == 0 && setImages.data && setLogos(setImages.data as Logos[]);
  }, [logos, setImages]);

  useEffect(() => {
    const validateSwitch = async () => {
      const item = await getItem();
      if (dark) {
        setIsDark(true);
      } else {
        item ? setIsDark(item === 'dark' ? true : false) : setIsDark(true);
      }
    };
    validateSwitch();
    // Appearance.addChangeListener(() => console.debug('remove')).remove();
  }, [dark, getItem]);

  return {
    handleLogout,
    onToggleSwitch,
    setIsDark,
    isDark,
    colors,
    theme,
    user,
    logos,
    counterEmployees,
    counterButtons,
    isLoading,
    imageAvatar,
    configuration
  };
};

export {DrawerComponentHook};
