import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export const notificationRequestPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    const newToken = await messaging().getToken();
    updateTokenFcm(newToken);
  }
};

const updateTokenFcm = async (newToken: string) => {
  const token = await AsyncStorage.getItem('@fcmToken');
  token != null
    ? newToken != token && AsyncStorage.setItem('@fcmToken', newToken)
    : AsyncStorage.setItem('@fcmToken', newToken);

  console.debug('fcmTokenm>>>>', token);
};
