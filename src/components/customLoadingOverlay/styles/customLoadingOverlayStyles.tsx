import {StyleSheet} from 'react-native';

export const customLoadingOverlayStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    zIndex: 99999999999999
  },
  loader: {
    flex: 1,
    justifyContent: 'center'
  }
});
