import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {ReactNode} from 'react';
import {Button, Text, ViewStyle} from 'react-native';
import {User} from './userTypes';
import {$RemoveChildren} from 'react-native-paper/lib/typescript/types';
import {ResultLocations} from './locationTypes';

export type ShopProps = {
  address: string;
  city: string;
  state: string;
  alias: string;
};
export type RegisterParams = {
  administrator: boolean;
  shop?: ShopProps;
  qr?: boolean;
  shopId?: string;
  type?: RegisterType;
};

export type HomeParams = {
  isLogin?: boolean;
  isBack?: boolean;
};

export type RegisterType = 'vehicle' | 'residence';

export type LoginParams = {
  qr?: boolean;
  data?: User;
  type?: RegisterType;
  countryCode?: string;
  loadingText?: string;
};
export type RootStackParamList = {
  Splash: undefined;
  MyOnboarding: undefined;
  Home: HomeParams;
  LoginSplash: undefined;
  Login: LoginParams;
  LoginForm: undefined;
  Register: RegisterParams;
  Profile: RegisterParams;
  Buttons: undefined;
  Employees: undefined;
  Notify: undefined;
  QrScanner: undefined;
};

export type SelectedTypes = 'phone' | 'city';

export type StackNavigation = StackNavigationProp<RootStackParamList>;
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;
export type LoginSplashProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginSplash'
>;
export type RegisterProps = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;
export type ButtonsProps = NativeStackScreenProps<
  RootStackParamList,
  'Buttons'
>;
export type EmployeesProps = NativeStackScreenProps<
  RootStackParamList,
  'Employees'
>;
export type MyOnboardingProps = NativeStackScreenProps<
  RootStackParamList,
  'MyOnboarding'
>;
export type QrScannerProps = NativeStackScreenProps<
  RootStackParamList,
  'QrScanner'
>;
export type NotifyProps = NativeStackScreenProps<RootStackParamList, 'Notify'>;

export type CustomLinkProps = {
  text: string;
  link: string;
  underline?: boolean;
  color?: string;
};

export type TextWithCustomLinkProps = {
  text: string;
  link?: string;
  visible: boolean;
};

export type QrModalProps = {
  visible: boolean;
  setVisible: (e: boolean) => void;
};

export type ButtonsListProps = {
  height?: number;
  width?: number;
  children: ReactNode;
};

export type CustomDialogAlertProps = {
  visible: boolean;
  setVisible: (e: boolean) => void;
  cancelButton?: boolean;
  actionSuccess?: (e: boolean) => void;
  title: string;
  description: string;
  continueButton?: boolean;
};

type Actions = {label: string & $RemoveChildren<typeof Button>}[];
export type CustomBannerProps = {
  actions?: Actions;
  visible: boolean;
  text: string;
  icon: string;
};

export type CustomLoaderProps = {
  label: string;
  visible: boolean;
  size?: 'small' | 'large';
  dots?: boolean;
};

export type CustomFabStyles =
  | 'bottomRight'
  | 'bottomLeft'
  | 'topRight'
  | 'topLeft'
  | 'topCenter'
  | 'bottomCenter';

export type CustomFabProps = {
  icon: string;
  position: CustomFabStyles;
  onPress: (e: any) => void;
  style?: ViewStyle;
  label?: string;
  iconColor?: string;
  disabled?: boolean;
  children?: any;
};

// type ParamListBase = {
//example to index on array
//   [x: string]: object | undefined;
// };

export type Field = {
  [x: string]: string | boolean | number | object;
};
