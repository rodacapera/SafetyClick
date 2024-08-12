import firestore from '@react-native-firebase/firestore';
import {Group} from '@src/types/groups';

export const createGroupFirebase = async (group: Group) => {
  const result = await firestore()
    .collection('groups')
    .doc(group.group_number)
    .set(group);
  return result;
};

export const getGroupById = async (id: string) => {
  const result = await firestore().collection('groups').doc(id).get();
  return result;
};
