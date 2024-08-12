// //example when firestor.collection().where().get() >> continue with .then

// import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
// import {Panics} from '@src/types/userTypes';

// const resultPanics = (
//   documentSnapshot: FirebaseFirestoreTypes.QuerySnapshot
// ) => {
//   documentSnapshot.docChanges().forEach(values => {
//     const data = values.doc.data() as Panics;
//     //   setPanics(prev => [...prev, data]);
//   });
// };

// const currentData: any = undefined; //this get data from firestore

// const query =
//   currentData &&
//   currentData?.panicsObserver.then(
//     (querySnapshot: FirebaseFirestoreTypes.QuerySnapshot) => {
//       if (!querySnapshot.empty) resultPanics(querySnapshot); //setPanics([]);
//     }
//   );
