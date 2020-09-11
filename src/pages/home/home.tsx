import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ALLOWED_IMAGE_EXTENSIONS } from '../../constants';
import getFileExtension from '../../utils/getFileExtension';

import {
  HomeContainer,
  Heading,
  CustomButton,
  FileName,
  ItemList,
} from './home.styles';

const Home: React.FC<{}> = props => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

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
    if (!file) return;

    console.log(file);
  }, [file]);

  return (
    <HomeContainer>
      <Heading>{t('latestPosts')}</Heading>
      <CustomButton
        type='file'
        name='image'
        value='+'
        onChange={handleFileChange}
      />
      {(file || error) && <FileName>{file?.name || error}</FileName>}
      <ItemList></ItemList>
    </HomeContainer>
  );
};

export default Home;
