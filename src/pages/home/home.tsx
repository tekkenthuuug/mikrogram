import React from 'react';
import { useTranslation } from 'react-i18next';

import { HomeContainer, Heading, CustomButton, ItemList } from './home.styles';

const Home: React.FC<{}> = props => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <Heading>{t('latestPosts')}</Heading>
      <CustomButton>+</CustomButton>
      <ItemList>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </ItemList>
    </HomeContainer>
  );
};

export default Home;
