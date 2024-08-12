import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Shop} from '@src/types/userTypes';

export const getShopFirebase = async (doc: string) => {
  const dbShop = await firestore().collection('shops').doc(doc).get();
  return dbShop.data();
};

export const getCompanyImagesFirebase = async (city: string) => {
  const reference = storage().ref(`logos/${city}/`);
  const list = (await reference.list()).items;
  const loop = await Promise.all(
    list.map(async value => {
      const data = {path: await value.getDownloadURL()};
      return data;
    })
  );
  return loop;
};

export const createShopFirebase = async (shop: Shop) => {
  const result = await firestore().collection('shops').add(shop);
  return result;
};
