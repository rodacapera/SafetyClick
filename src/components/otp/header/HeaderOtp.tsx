import {useNavigation} from '@react-navigation/native';
import {handleBack} from '@src/components/otp/hooks/otpFunctions';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {StackNavigation} from '@src/types/globalTypes';
import {HeaderOtpParams} from '@src/types/otpTypes';
import {t} from 'i18next';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {otpStyles} from '../styles/otpStyles';

const transparent = 'transparent';

const HeaderOtp = ({
  setButtonAction,
  setCode,
  counter,
  goBack
}: HeaderOtpParams) => {
  const navigator = useNavigation<StackNavigation>();
  const {colors, theme, dark} = ActualTheme();

  return (
    <View style={otpStyles.headerOtp}>
      <View style={otpStyles.contentBackButtonOtp}>
        {counter === 60 && (
          <Button
            icon="arrow-left"
            textColor={dark ? colors.onSurface : colors.onPrimaryContainer}
            style={{backgroundColor: transparent}}
            theme={theme}
            mode="text"
            onPress={() => {
              handleBack(setButtonAction, setCode, goBack, navigator);
            }}>
            {t('general.back')}
          </Button>
        )}
      </View>
      <View style={otpStyles.contentTitleOtp}>
        <Text
          style={[
            otpStyles.titleOtp,
            {
              color: dark ? colors.onSurface : colors.outline
            }
          ]}>
          {t('otp.title')} {'\n'}
        </Text>
        <Text
          style={[
            otpStyles.subTitleOtp,
            {
              color: dark ? colors.onSurface : colors.outline
            }
          ]}>
          {t('otp.subTitle')}
        </Text>
      </View>
    </View>
  );
};

export default HeaderOtp;
