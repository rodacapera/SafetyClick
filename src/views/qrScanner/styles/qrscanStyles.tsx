import {StyleSheet} from 'react-native';

export const qrScanStyles = StyleSheet.create({
  buttonContent: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 30,
    paddingTop: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
