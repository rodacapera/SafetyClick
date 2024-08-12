import firestore from '@react-native-firebase/firestore';

export const getPanicsFirebase = (
  group_number: string,
  city: string,
  countryCode: string
) => {
  const now: number = Date.now();
  const dbPanics = firestore()
    .collection('panics')
    .where(
      firestore.Filter.and(
        firestore.Filter('group_number', '==', group_number),
        firestore.Filter('expiration_time', '>=', now),
        firestore.Filter('city', '==', city),
        firestore.Filter('countryCode', '==', countryCode)
      )
    );
  return dbPanics;
};
