import {ImageSourcePropType} from 'react-native';

export type ImageProps = {
  source: ImageSourcePropType;
  style: ImageStyles;
};
export type ImageStyles = {
  imageContainer: object;
};

export type Logos = {
  path: string;
};
