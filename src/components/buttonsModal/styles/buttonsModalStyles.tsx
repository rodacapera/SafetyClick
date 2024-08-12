import {StyleSheet} from 'react-native';

const gray = '#ccc';
const transparent = 'transparent';

export const buttonsModalStyles = StyleSheet.create({
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  linkText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  modalContainer: {
    padding: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 6
  },
  modalContent: {
    alignItems: 'center',
    paddingBottom: 20
  },
  helperCaption: {
    borderColor: gray,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  title: {
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 30,
    textAlign: 'left',
    fontWeight: '600'
  },
  button: {
    borderColor: gray,
    borderWidth: 1,
    margin: 3,
    borderRadius: 6
  },
  input: {
    width: 280,
    backgroundColor: transparent,
    marginVertical: 15
  }
});
