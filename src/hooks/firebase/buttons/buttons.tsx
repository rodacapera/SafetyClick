import firestore from '@react-native-firebase/firestore';
import {Buttons} from '@src/types/buttons';
import {User} from '@src/types/userTypes';

export const getButtonsFirebase = (shop: string) => {
  const shopDocRef = firestore().doc(shop);
  const dbPanics = firestore()
    .collection('buttons')
    .where('shop', '==', shopDocRef);
  return dbPanics;
};

export const createButtonsFirebase = async (button: Buttons, user: User) => {
  const data = {...button, shop: firestore().doc(user.shop)};
  const result = await firestore()
    .collection('buttons')
    .doc(button.uid)
    .set(data);
  return result;
};

export const removeButtonByIdFirebase = async (id: string) => {
  const result = await firestore().collection('buttons').doc(id).delete();
  return result;
};
