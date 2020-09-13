import firebase from 'firebase';
import { v4 } from 'uuid';
import { storage } from '..';
import { createImageDocument } from '../firestore';

const storageRef = storage.ref();

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

  const newFileRef = storageRef.child(id);

  const uploadTask = newFileRef.put(file);

  const subscribe = uploadTask.on('state_changed');

  const unscubscribe = subscribe({
    ...callbacks,
    complete: async () => {
      const downloadURL = await storageRef.child(id).getDownloadURL();

      await createImageDocument(downloadURL, ownerId);

      if (callbacks.complete) callbacks.complete();
      unscubscribe();
    },
  });

  return file;
};
