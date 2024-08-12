import {useNavigation} from '@react-navigation/native';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {type StackNavigation} from '@src/types/globalTypes';
import {LoginButtonsProps} from '@src/types/loginTypes';
import {t} from 'i18next';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native-paper';
import {loginFormStyles} from '../styles/loginFormStyles';

const Buttons = ({
  setButtonAction,
  currentButtonAction,
  type
}: LoginButtonsProps) => {
  const {navigate} = useNavigation<StackNavigation>();
  const {dark, colors} = ActualTheme();

  return (
    <View style={loginFormStyles.loginButtonsContainer}>
      <View style={loginFormStyles.buttonLogin}>
        <Button
          style={loginFormStyles.button}
          textColor="white"
          buttonColor={
            dark ? colors.primaryContainer : colors.onPrimaryContainer
          }
          icon="login"
          mode="contained"
          onPress={() => setButtonAction(currentButtonAction)}>
          {t('loginView.signIn')}
        </Button>
      </View>
      <View style={loginFormStyles.buttonQr}>
        <Button
          style={loginFormStyles.button}
          textColor="white"
          buttonColor={
            dark ? colors.primaryContainer : colors.onPrimaryContainer
          }
          icon="qrcode"
          mode="contained"
          onPress={() => navigate('QrScanner')}>
          {t('loginView.scanButton')}
        </Button>
      </View>

      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderBottomColor: dark ? colors.onSurface : colors.onPrimaryContainer
        }}
        onPress={() => navigate('Register', {administrator: true, type})}>
        <Text
          style={{
            color: dark ? colors.onSurface : colors.onSurface
          }}>
          {t('loginView.signUp')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
