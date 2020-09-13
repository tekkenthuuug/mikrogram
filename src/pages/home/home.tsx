import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ALLOWED_IMAGE_EXTENSIONS, ROUTES } from '../../constants';
import { UserContext } from '../../context/user.context';
import { uploadFileToStorage } from '../../firebase/storage';
import getFileExtension from '../../utils/getFileExtension';

import {
  HomeContainer,
  Heading,
  CustomButton,
  FileName,
  ItemList,
} from './home.styles';

const Home: React.FC<{}> = props => {
  const { t } = useTranslation();
  const user = useContext(UserContext);
  const history = useHistory();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || !files.length) {
      return;
    }

    const file = files[0];

    if (ALLOWED_IMAGE_EXTENSIONS.includes(getFileExtension(file.name))) {
      setFile(file);
      setError(null);
    } else {
      setError('Wrong file extension');
    }
  };

  useEffect(() => {
    if (!file || !user) return;

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
      });
    })();
  }, [file, user]);

  return (
    <HomeContainer>
      <Heading>{t('latestPosts')}</Heading>
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
      {file && <div>{progress}</div>}
      {(file || error) && <FileName>{file?.name || error}</FileName>}
      <ItemList></ItemList>
    </HomeContainer>
  );
};

export default Home;
