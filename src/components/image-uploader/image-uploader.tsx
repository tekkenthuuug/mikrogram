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
  const user = useContext(UserContext);
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
    if (!file || !user) return;

    setDisplayLoading(true);

    (async () => {
      await uploadFileToStorage(file, user.uid, {
        next: snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgress(progress);
        },
        error: error => {
          setError(error.message);
        },
        complete: () => {
          if (!error) {
            setTimeout(() => {
              setDisplayLoading(false);
            }, 3000);
          }
        },
      });
    })();
  }, [file, user, error]);

  return (
    <>
      <CustomButton
        type='file'
        name='image'
        value='+'
        onClick={e => {
          if (!user) {
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
