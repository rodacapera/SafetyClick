import {useNavigation} from '@react-navigation/native';
import {login_background} from '@src/assets/images';
import CustomLoadingOverlay from '@src/components/customLoadingOverlay/CustomLoadingOverlay';
import {APP_NAME_END, APP_NAME_FIRST} from '@src/globals/constants/config';
import {getLocation} from '@src/hooks/locations/geocoderHook';
import {HeaderShown} from '@src/hooks/navigator/headerShown';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {StackNavigation} from '@src/types/globalTypes';
import {ResultLocations} from '@src/types/locationTypes';
import {t} from 'i18next';
import {useEffect, useLayoutEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  useWindowDimensions
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {backgroundStyle} from '../../globals/styles/screenMode';
import {loginStyles} from './styles/loginStyles';

const LoginSplash = () => {
  const {width} = useWindowDimensions();
  const {dark, colors} = ActualTheme();
  const navigation = useNavigation<StackNavigation>();
  const [loadingText, setLoadingText] = useState(t('general.loading'));
  const [myCurrentLocation, setMyCurrentLocation] = useState<ResultLocations>();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingText(t('network.alertErrorTitle'));
    }, 20000);
    getLocation(setMyCurrentLocation);
  }, []);

  useLayoutEffect(() => {
    let isMounted = true;
    isMounted &&
      HeaderShown({
        navigation,
        visible: false,
        transparent: false
      });
    return () => {
      isMounted = false;
    };
  }, [navigation]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDataLoaded(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      console.log('myCurrentLocation', myCurrentLocation);

      if (myCurrentLocation?.country?.short_name) {
        navigation.navigate('Login', {
          type: 'vehicle',
          loadingText: loadingText,
          countryCode: myCurrentLocation?.country?.short_name?.toLowerCase()
        });
      }
    }
  }, [dataLoaded]);

  return (
    <SafeAreaView
      style={[backgroundStyle, {backgroundColor: colors.background}]}>
      <CustomLoadingOverlay visible dots label={loadingText} />
    </SafeAreaView>
  );
};

export default LoginSplash;
