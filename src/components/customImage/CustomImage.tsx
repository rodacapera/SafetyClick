import {ImageProps} from '@src/types/imageTypes';
import {Image} from 'react-native';

const CustomImage = ({source, style}: ImageProps) => {
  return <Image source={source} style={style.imageContainer} />;
};

export default CustomImage;
