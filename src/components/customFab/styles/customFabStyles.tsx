import {Platform, PlatformIOSStatic, StyleSheet} from 'react-native';
const platformIOS = Platform as PlatformIOSStatic;

export const customFabStyles = StyleSheet.create({
  bottomRight: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: Platform.OS === 'android' ? 0 : 10
  },
  bottomLeft: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: Platform.OS === 'android' ? 0 : 10
  },
  topRight: {
    position: 'absolute',
    margin: 16,
    top: Platform.OS == 'android' ? -10 : platformIOS.isPad ? 8 : 30,
    right: 0
  },
  topLeft: {
    position: 'absolute',
    margin: 16,
    top: 30,
    left: 0
  },
  topCenter: {
    position: 'absolute',
    margin: 16,
    top: 0
  },
  bottomCenter: {
    position: 'absolute',
    margin: 16,
    bottom: Platform.OS === 'android' ? 0 : 10
  }
});
