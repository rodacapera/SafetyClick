import AsyncStorage from '@react-native-async-storage/async-storage';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {useNavigation} from '@react-navigation/native';
import {SetShopQuery} from '@src/reactQuery/userQuery';
import {StackNavigation} from '@src/types/globalTypes';
import {useCallback, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {HeaderShown} from '../navigator/headerShown';
import {ActualTheme} from '../navigator/hook/GlobalTheme';

const SplashHook = () => {
  const navigator = useNavigation<StackNavigation>();
  const colorScheme = useColorScheme();
  const {dark, colors} = ActualTheme();

  const [shopId, setShopId] = useState<string>('');
  SetShopQuery(shopId);

  const init = useCallback(async () => {
    const user = await AsyncStorage.getItem('@userAuth');
    const appInit = await AsyncStorage.getItem('@appInit');
    setTimeout(() => {
      if (appInit !== null) {
        if (user) {
          navigator.replace('Home', {isLogin: false, isBack: true});
        } else {
          shopId
            ? navigator.navigate('Register', {
                administrator: false,
                qr: true,
                shopId: shopId
              })
            : navigator.replace('LoginSplash');
        }
      } else {
        navigator.replace('MyOnboarding');
      }
    }, 2000);
  }, [navigator, shopId]);

  const handleDynamicLink = (link: {url: string}) => {
    // Handle dynamic link inside your own application
    if (link.url.includes('?')) {
      const params = link.url.split('?')[1].split('&');
      // const viewParam = params[0].split('=');
      const shopParam = params[1].split('=');
      // const view = viewParam[0] == 'view' ? viewParam[1] : undefined;
      const id_shop = shopParam[0] == 'id_shop' ? shopParam[1] : undefined;
      id_shop && setShopId(id_shop);
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      HeaderShown({
        navigation: navigator,
        visible: false,
        transparent: false
      });
      init();
    }
    return () => {
      isMounted = false;
    };
  }, [init, navigator]);

  return {colorScheme, colors, dark};
};

export {SplashHook};
