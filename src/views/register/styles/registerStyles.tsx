import {StyleSheet} from 'react-native';
const bgOpacity = 'rgba(245, 40, 145, 0.05)';
const transparent = 'transparent';

export const registerStyles = StyleSheet.create({
  activeButton: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRadius: 4,
    elevation: 2, // Android
    marginHorizontal: 2,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41
  },
  body: {
    marginTop: 10,
    paddingHorizontal: 50,
    width: '100%'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 20
  },
  contentBackButtonRegister: {
    alignItems: 'flex-start',
    left: -10,
    position: 'absolute',
    top: -30,
    zIndex: 99999
  },
  contentFooterText: {
    display: 'flex',
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    marginVertical: 30,
    width: 280
  },
  footerText: {
    alignItems: 'center'
  },
  header: {
    marginHorizontal: 20,
    position: 'relative',
    width: '100%'
  },
  inactiveButton: {
    alignItems: 'center',
    backgroundColor: bgOpacity,
    borderRadius: 4,
    marginHorizontal: 2,
    padding: 10
  },
  input: {
    backgroundColor: transparent,
    marginVertical: 15,
    width: 280
  },
  tabContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around'
  }
});
