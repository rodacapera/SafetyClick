import {ActualTheme} from '@src/hooks/navigator/hook/GlobalTheme';
import CustomIcon from '../customIcon/CustomIcon';

const ArrowBackIcon = () => {
  const {colors} = ActualTheme();
  return (
    <CustomIcon font="material" name="arrow-back" color={colors.onPrimary} />
  );
};

export default ArrowBackIcon;
