import firebase from 'firebase';
import { v4 } from 'uuid';
import { storage } from '..';

const storageRef = storage.ref();

export const uploadFileToStorage = async (file: File) => {
  const imageId = v4();

  const newFileRef = storageRef.child(imageId);

  return { imageId, upload: await newFileRef.put(file) };
};
