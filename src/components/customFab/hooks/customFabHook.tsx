import {CustomFabStyles} from '@src/types/globalTypes';
import {ViewStyle} from 'react-native';
import {customFabStyles} from '../styles/customFabStyles';

export const validatePosition = (
  styles: CustomFabStyles,
  setStyle: (e: ViewStyle) => void
) => {
  switch (styles) {
    case 'bottomRight':
      setStyle(customFabStyles.bottomRight);
      break;
    case 'bottomLeft':
      setStyle(customFabStyles.bottomLeft);
      break;
    case 'topRight':
      setStyle(customFabStyles.topRight);
      break;
    case 'topLeft':
      setStyle(customFabStyles.topLeft);
      break;
    case 'bottomCenter':
      setStyle(customFabStyles.bottomCenter);
      break;
    case 'topCenter':
      setStyle(customFabStyles.topCenter);
      break;
  }
};
