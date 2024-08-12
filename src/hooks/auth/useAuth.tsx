import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '@src/types/userTypes';

export const getUseAuth = async () => {
  const result = await AsyncStorage.getItem('@userAuth');
  return result ? JSON.parse(result) : null;
};

export const updateUserAuth = async (uid: string, user: User) => {
  const result = await AsyncStorage.setItem(
    '@userAuth',
    JSON.stringify({uid, user})
  );
  return result;
};
