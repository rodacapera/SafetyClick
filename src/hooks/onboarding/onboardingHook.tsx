import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';
import {
  getCurrentPosition,
  requestLocationPermission
} from '../locations/permissionsHook';
import Geolocation from 'react-native-geolocation-service';

const grantedAndroid = async (
  setVisible: (e: boolean) => void,
  navigate: any
) => {
  const granted = await requestLocationPermission();
  isGranted(granted, setVisible, navigate);
};

const grantedIos = async (setVisible: (e: boolean) => void, navigate: any) => {
  const status = await Geolocation.requestAuthorization('whenInUse');
  if (status === 'granted') {
    const granted = await getCurrentPosition();
    const isGrantedValid = granted.coords ? true : false;
    isGranted(isGrantedValid, setVisible, navigate);
  }
};

const isGranted = async (
  granted: boolean,
  setVisible: (e: boolean) => void,
  navigate: any
) => {
  if (granted) {
    await AsyncStorage.setItem('@appInit', 'true');
    navigate('LoginSplash');
  } else {
    setVisible(true);
  }
};

const handleFinishOnboarding = async (
  setVisible: (e: boolean) => void,
  navigate: any
) => {
  if (Platform.OS === 'android') {
    grantedAndroid(setVisible, navigate);
  } else {
    grantedIos(setVisible, navigate);
  }
};

export {handleFinishOnboarding};
