import React, { useContext, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { ALLOWED_IMAGE_EXTENSIONS, ROUTES } from '../../constants';
import { UserContext } from '../../context/user.context';
import { uploadFileToStorage } from '../../firebase/storage';
import getFileExtension from '../../utils/getFileExtension';

import {
  CustomButton,
  FileName,
  Progress,
  ProgressContainer,
  CloseButton,
  ErrorMessage,
  ProgressContainerVariants,
} from './image-uploader.styles';

interface Props {}

const ImageUploader: React.FC<Props> = props => {
  const { currentUser } = useContext(UserContext)!;
  const history = useHistory();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [displayLoading, setDisplayLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || !files.length) {
      return;
    }

    const file = files[0];

    try {
      const fileExtension = getFileExtension(file.name);

      if (ALLOWED_IMAGE_EXTENSIONS.includes(fileExtension)) {
        setFile(file);
        setError(null);
      } else {
        setError(`Wrong file extension: .${fileExtension}`);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const reset = () => {
    setDisplayLoading(false);
    setProgress(0);
    setError(null);
    setFile(null);
  };

  useEffect(() => {
    if (!file || !currentUser) return;

    setDisplayLoading(true);

    let hideLoadingTimeout: number | null = null;

    const uploadTask = uploadFileToStorage(file, currentUser.uid, {
      next: snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progress);
      },
      complete: () => {
        if (!error) {
          hideLoadingTimeout = setTimeout(() => {
            setDisplayLoading(false);
          }, 3000);
        }
      },
    });

    return () => {
      uploadTask?.cancel();
      if (hideLoadingTimeout) clearTimeout(hideLoadingTimeout);
    };
  }, [file, currentUser, error]);

  return (
    <>
      <CustomButton
        type='file'
        name='image'
        value='+'
        onClick={e => {
          if (!currentUser) {
            e.preventDefault();
            history.push(ROUTES.signin);
          }
        }}
        onChange={handleFileChange}
      />
      {/* If there is an error before upload starts */}
      {error && !file && <ErrorMessage>{error}</ErrorMessage>}
      <AnimatePresence>
        {file && displayLoading && (
          <ProgressContainer
            variants={ProgressContainerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <FileName>{file.name}</FileName>
            {/* If there is an error while uploading*/}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Progress progress={progress} />
            {/* If uploading is complete */}
            {progress === 100 && (
              <CloseButton onClick={reset}>Close</CloseButton>
            )}
          </ProgressContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageUploader;
