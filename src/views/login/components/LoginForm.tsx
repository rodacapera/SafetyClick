import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {LoginFormProps} from '@src/types/loginTypes';
import {t} from 'i18next';
import {useRef} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import ErrorInputForm from '../../../components/customErrorInputForm/CustomErrorInputForm';
import CustomInputForm from '../../../components/customInputForm/CustomInputForm';
import Buttons from './Buttons';

const LoginForm = ({
  setButtonAction,
  errorPhone,
  currentButtonAction,
  setCurrentButtonAction,
  type,
  errorUserNotExist,
  countryCode
}: LoginFormProps) => {
  const phoneRef = useRef<any>();
  const {colors, dark} = ActualTheme();

  return (
    <View
      style={{
        height: 450,
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
      <Text
        variant="titleLarge"
        style={{
          margin: 20,
          color: dark ? colors.onSurface : colors.onPrimaryContainer
        }}>
        {t('loginView.title')}
      </Text>
      <CustomInputForm
        phoneRef={phoneRef}
        setButtonAction={setCurrentButtonAction}
        type="phone"
        code={countryCode}
      />
      {errorPhone && <ErrorInputForm error={t('loginView.errorPhone')} />}
      {errorUserNotExist && (
        <ErrorInputForm error={t('loginView.errorUserNotExist')} />
      )}
      <Buttons
        setButtonAction={setButtonAction}
        currentButtonAction={currentButtonAction}
        type={type}
      />
    </View>
  );
};

export default LoginForm;
