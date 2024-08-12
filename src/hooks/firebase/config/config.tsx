import firestore from '@react-native-firebase/firestore';

export const getConfigurationFirebase = async (country: string) => {
  const dbConfiguration = await firestore()
    .collection('configuration')
    .where('countryCode', '==', country)
    .get();
  return dbConfiguration;
};
