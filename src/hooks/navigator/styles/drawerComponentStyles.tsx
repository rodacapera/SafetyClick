import {Platform, StyleSheet} from 'react-native';

export const drawerComponentStyles = StyleSheet.create({
  drawerContent: {
    flex: 1
    // backgroundColor: 'red',
  },
  userInfoSection: {
    marginTop: Platform.OS === 'android' ? 20 : 10,
    paddingHorizontal: 20
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    textTransform: 'capitalize',
    fontWeight: '500'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginVertical: 5
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3
  },
  drawerSection: {
    marginTop: 10
  },
  preferenceTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  logos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  imagesLogos: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  containerLogos: {
    borderRadius: 100,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13
  },
  titleLogos: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
