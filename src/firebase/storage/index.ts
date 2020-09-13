import firebase from 'firebase';
import { v4 } from 'uuid';
import { storage } from '..';
import { createImageDocument } from '../firestore';

const storageRef = storage.ref();
const postImagesFolderRef = storageRef.child('post-images');

interface IUploadCallbacks {
  next?: (snapshot: firebase.storage.UploadTaskSnapshot) => any;
  error?: (error: Error) => any;
  complete?: () => any;
}

export const uploadFileToStorage = async (
  file: File,
  ownerId: string,
  callbacks: IUploadCallbacks
) => {
  const id = v4();

  const newFileRef = postImagesFolderRef.child(id);

  const uploadTask = newFileRef.put(file);

  const subscribe = uploadTask.on('state_changed');

  const unscubscribe = subscribe({
    ...callbacks,
    next: (snapshot: firebase.storage.UploadTaskSnapshot) => {
      try {
        if (callbacks.next) callbacks.next(snapshot);
      } catch (error) {
        if (callbacks.error) callbacks.error(error);
      }
    },
    complete: async () => {
      const downloadURL = await postImagesFolderRef.child(id).getDownloadURL();

      await createImageDocument(downloadURL, ownerId);

      if (callbacks.complete) callbacks.complete();
      unscubscribe();
    },
  });

  return file;
};
