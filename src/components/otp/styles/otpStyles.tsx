import {StyleSheet} from 'react-native';
export const otpStyles = StyleSheet.create({
  containerOtp: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 60
  },
  headerOtp: {
    width: '100%',
    marginHorizontal: 20,
    position: 'relative'
  },
  contentBackButtonOtp: {
    position: 'absolute',
    left: -10,
    top: -20,
    alignItems: 'flex-start',
    zIndex: 99999
  },
  contentTitleOtp: {
    width: '100%',
    paddingHorizontal: 60,
    alignItems: 'center'
  },
  contentOtpInput: {
    height: 200,
    paddingTop: 60,
    width: 320
  },
  contentOtpButtons: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 50
  },
  titleOtp: {
    fontSize: 20,
    fontWeight: '600'
  },
  subTitleOtp: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '400'
  },
  errorOtp: {
    marginTop: 8
  }
});
