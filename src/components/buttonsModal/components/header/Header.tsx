import {shelly_button} from '@src/assets/images';
import CustomImage from '@src/components/customImage/CustomImage';
import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import {t} from 'i18next';
import {View} from 'react-native';
import {Caption} from 'react-native-paper';
import {buttonsModalStyles} from '../../styles/buttonsModalStyles';

const Header = ({visible}: {visible: boolean}) => {
  const {colors} = ActualTheme();
  return visible ? (
    <View style={buttonsModalStyles.helperCaption}>
      <CustomImage source={shelly_button} style={buttonsModalStyles} />
      <Caption
        style={[
          buttonsModalStyles.title,
          {
            color: colors.onSurfaceVariant
          }
        ]}>
        {t('buttonsModal.helperTitleQr')}
      </Caption>
    </View>
  ) : (
    <></>
  );
};

export default Header;
