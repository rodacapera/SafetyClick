import {MD3Colors} from 'react-native-paper/lib/typescript/types';
import {StackNavigation} from './globalTypes';

export type SendNotificationProps = {
  data: any;
  setLoading: (e: boolean) => void;
  colors: MD3Colors;
  width: number;
  navigation: StackNavigation;
  setSnackVisible: (e: boolean) => void;
};
