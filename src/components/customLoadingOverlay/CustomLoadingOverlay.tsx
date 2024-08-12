import {t} from 'i18next';
import {View} from 'react-native';
import CustomLoader from '../customLoader/CustomLoader';
import {customLoadingOverlayStyles} from './styles/customLoadingOverlayStyles';

const transparentColor = 'transparent';
const whiteOpacity = 'rgba(255,255,255, 0.60)';

const CustomLoadingOverlay = ({
  visible,
  transparent,
  dots = true,
  label,
  size = 'large'
}: {
  visible: boolean;
  transparent?: boolean;
  dots?: boolean;
  label?: string;
  size?: 'small' | 'large';
}) => {
  return visible ? (
    <View
      style={[
        customLoadingOverlayStyles.container,
        {
          backgroundColor: transparent ? transparentColor : whiteOpacity
        }
      ]}>
      <View
        style={[
          customLoadingOverlayStyles.loader,
          {paddingTop: !dots && label == '' && size == 'small' ? 20 : 0}
        ]}>
        <CustomLoader
          visible={visible}
          size={size}
          label={label ?? t('general.loading')}
          dots={dots}
        />
      </View>
    </View>
  ) : (
    <></>
  );
};

export default CustomLoadingOverlay;
