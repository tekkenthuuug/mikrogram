import firebase from 'firebase/app';
import { auth } from '..';
import { User } from '../../types';
import { createUserProfileDocument } from '../firestore';

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWith = (provider: firebase.auth.AuthProvider) => async () => {
  try {
    await auth.signInWithRedirect(provider);
  } catch (error) {
    console.log('Error logging in with auth provider', error);
  }
};

export const signInWithGoogle = signInWith(googleProvider);

export const createUserWithEmailAndPassword = async (
  email: string,
  username: string,
  password: string
) => {
  const userAuth = await auth.createUserWithEmailAndPassword(email, password);

  const userRef = await createUserProfileDocument(userAuth.user, {
    displayName: username,
  });

  return userRef;
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const userAuth = await auth.signInWithEmailAndPassword(email, password);

  const userRef = await createUserProfileDocument(userAuth.user);

  return userRef;
};

export const firebaseSignOut = async () => await auth.signOut();

export const listenToAuthState = (
  callback: (user: User | null, error: firebase.auth.Error | null) => any
) => {
  return auth.onAuthStateChanged(
    async user => {
      const userRef = await createUserProfileDocument(user);

      const userSnap = await userRef?.get();

      const userData = userSnap?.data();

      if (!userData) {
        callback(null, null);

        return;
      }

      callback(userData as User, null);
    },
    error => {
      callback(null, error);
    }
  );
};
