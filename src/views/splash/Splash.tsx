import {logo_app} from '@src/assets/images';
import {APP_NAME_END, APP_NAME_FIRST} from '@src/globals/constants/config';
import {backgroundStyle} from '@src/globals/styles/screenMode';
import {Image, StatusBar, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {splashStyles} from './styles/splashStyles';
import {SplashHook} from '@src/hooks/splash/splashHook';
const Splash = () => {
  const {colorScheme, colors, dark} = SplashHook();

  return (
    <SafeAreaView
      style={[backgroundStyle, {backgroundColor: colors.background}]}>
      <StatusBar
        backgroundColor={
          colorScheme == 'dark'
            ? colors.onPrimaryContainer
            : dark
            ? colors.onPrimary
            : colors.primaryContainer
        }
        animated={true}
        barStyle={
          colorScheme == 'dark'
            ? 'light-content'
            : dark
            ? 'light-content'
            : 'dark-content'
        }
      />
      <View style={splashStyles.container}>
        <View style={splashStyles.imgContent}>
          <Image source={logo_app} style={splashStyles.logo} />
          <Text
            style={[
              splashStyles.textLogoInit,
              {color: dark ? colors.onPrimaryContainer : colors.primary}
            ]}>
            {APP_NAME_FIRST}
            <Text
              style={[
                splashStyles.textLogoFin,
                {
                  color: dark ? colors.inversePrimary : colors.primary
                }
              ]}>
              {APP_NAME_END}
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
