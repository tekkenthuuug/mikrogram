import React from 'react';
import Loader from '../loader/loader';

import { LoadingScreenContainer } from './loading-screen.styles';

const LoadingScreen = () => {
  return (
    <LoadingScreenContainer>
      <Loader />
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
