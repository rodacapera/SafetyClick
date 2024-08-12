import {StyleSheet} from 'react-native';
export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 20,
    position: 'relative',
    paddingVertical: 10,
    justifyContent: 'center'
  },
  arrowBackIcon: {
    position: 'absolute',
    left: 5
  },
  title: {
    fontSize: 26,
    width: 280,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center'
  }
});
