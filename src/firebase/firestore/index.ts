import firebase from 'firebase';
import { firestore } from '..';

export const userCollectionRef = firestore.collection('users');
export const imageCollectionRef = firestore.collection('images');

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

export const createImageDocument = async (
  imageURL: string,
  ownerId: string
) => {
  const userRef = userCollectionRef.doc(ownerId);

  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    return;
  }

  const imageRef = await imageCollectionRef.add({
    imageURL,
    ownerId,
  });

  return imageRef;
};
