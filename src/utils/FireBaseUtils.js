import {getFirestore, arrayUnion} from '@react-native-firebase/firestore';
import {AppContext} from '../context/AppContext';
import {useContext} from 'react';

export const upsertDocument = async (docId, data) => {
  const {state} = useContext(AppContext);
  const docRef = getFirestore().collection('orders').doc(docId);
  console.log('doc ref:1', data);
  await getFirestore()
    .collection('usersInfo')
    .doc(state.userState.user.email)
    .set({previousOrders: arrayUnion(data)}, {merge: true});
  console.log('doc ref:2', data);

  try {
    const docSnapshot = await docRef.get();
    if (docSnapshot.exists) {
      await docRef.set({items: arrayUnion(data)}, {merge: true});
      console.log('Data added to array successfully');
    } else {
      await docRef.set({items: [data]});
      console.log('New document created successfully');
    }
  } catch (error) {
    console.error('Error in upserting document:', error);
  }
};
