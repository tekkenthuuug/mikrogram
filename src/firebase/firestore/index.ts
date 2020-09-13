import firebase from 'firebase';
import { firestore } from '..';
import { Post, PostWithOwner, User } from '../../types';

export const userCollectionRef = firestore.collection('users');
export const postsCollectionRef = firestore.collection('posts');

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
      createdAt: Date.now(),
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

  const imageRef = await postsCollectionRef.add({
    imageURL,
    ownerId,
    createdAt: Date.now(),
  });

  return imageRef;
};

export const listenForImageCollection = async (
  callback: (posts: PostWithOwner[]) => any
) => {
  return postsCollectionRef
    .orderBy('createdAt', 'desc')
    .onSnapshot(async postsSnapshot => {
      const posts: PostWithOwner[] = [];

      for (const postDoc of postsSnapshot.docs) {
        const postData = postDoc.data() as Post;

        const ownerRef = userCollectionRef.doc(postData.ownerId);
        const ownerSnapshot = await ownerRef.get();
        const ownerData = ownerSnapshot.data() as User;

        const postWithOwner: PostWithOwner = {
          ...postData,
          owner: ownerData,
          id: postDoc.id,
        };

        posts.push(postWithOwner);
      }

      callback(posts);
    });
};
