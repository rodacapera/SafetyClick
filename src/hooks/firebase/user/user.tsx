import firestore from '@react-native-firebase/firestore';
import {Field} from '@src/types/globalTypes';
import {User} from '@src/types/userTypes';

export const getUserFirebase = async (userUid: string) => {
  const dbUser = await firestore().collection('users').doc(userUid).get();
  return dbUser.data();
};

export const getUserByPhoneNumberFirebase = async (phone: string) => {
  const dbUser = await firestore()
    .collection('users')
    .where('phone', '==', phone)
    .get();
  return dbUser;
};

export const editShopFirebase = async (
  shop: {
    alias: string;
    address: string;
  },
  doc: string
) => {
  await firestore().collection('shops').doc(doc).update(shop);
  return shop;
};

export const editUserFirebase = async (user: User) => {
  const shop = {alias: user.alias, address: user.address};
  await firestore().collection('users').doc(user.user_uid).update(user);
  await editShopFirebase(shop, user.shop.split('/')[1]);
  return user;
};

export const editDevicesUserFirebase = async (
  user_uid: string,
  field: object
) => {
  const result = await firestore()
    .collection('users')
    .doc(user_uid)
    .update({devices: firestore.FieldValue.arrayUnion(field)});
  return result;
};

export const editFieldUserFirebase = async (user_uid: string, field: Field) => {
  const result = await firestore()
    .collection('users')
    .doc(user_uid)
    .update(field);
  return result;
};

export const createUserFirebase = async (user: User) => {
  const result = await firestore()
    .collection('users')
    .doc(user.user_uid)
    .set(user);
  return result;
};
