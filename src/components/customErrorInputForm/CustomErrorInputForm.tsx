import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {Text, View} from 'react-native';
import {loginFormStyles} from '../../views/login/styles/loginFormStyles';

const ErrorInputForm = ({
  error,
  marginTop = -29
}: {
  error: string;
  marginTop?: number;
}) => {
  const {dark, colors} = ActualTheme();
  return (
    <View style={[loginFormStyles.errorContainer, {marginTop}]}>
      <Text
        style={[
          loginFormStyles.error,
          {color: dark ? colors.onSurface : colors.error}
        ]}>
        {error!}
      </Text>
    </View>
  );
};

export default ErrorInputForm;
