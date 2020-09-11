import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import CustomButton from '../custom-button/custom-button';
import LanguageSelector from '../language-selector/language-selector';
import ThemeSelector from '../theme-selector/theme-selector';

import { HeaderContainer, RightContainer } from './header.styles';

const Header: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <LogoSVG />
      <RightContainer>
        <ThemeSelector />
        <LanguageSelector />
        <CustomButton type='button' value={t('singin')!} />
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
