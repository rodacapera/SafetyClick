import {PermissionsAndroid} from 'react-native';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      }
    );
    if (granted === 'granted') {
      console.debug('You can use Geolocation');
      return true;
    } else {
      console.debug('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

export const getCurrentPosition = async (): Promise<GeoPosition> =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      error => {
        console.error(
          'errorGetCurrentPosition',
          error.code,
          'message',
          error.message
        );
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
    );
  });
