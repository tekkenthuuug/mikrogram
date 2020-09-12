import firebase from 'firebase';
import { firestore } from '..';

export const userCollectionRef = firestore.collection('users');

export const createUserProfileDocument = async (
  user: firebase.User | null,
  additionalData?: any
) => {
  if (!user) return;

  const userRef = userCollectionRef.doc(user.uid);

  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    await userRef.set({
      photoURL: user.photoURL,
      displayName: user.displayName,
      uid: user.uid,
      ...additionalData,
    });
  }

  return userRef;
};
