import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import { ROUTES } from '../../constants';
import { UserContext } from '../../context/user.context';
import CustomButton from '../custom-button/custom-button';
import LanguageSelector from '../language-selector/language-selector';
import ThemeSelector from '../theme-selector/theme-selector';
import { firebaseSignOut } from '../../firebase/auth';

import { HeaderContainer, RightContainer } from './header.styles';

const Header: React.FC<{}> = () => {
  const { t } = useTranslation();
  const currentUser = useContext(UserContext);

  return (
    <HeaderContainer>
      <Link to={ROUTES.home}>
        <LogoSVG />
      </Link>
      <RightContainer>
        <ThemeSelector />
        <LanguageSelector />
        {currentUser ? (
          <CustomButton
            type='button'
            value={t('signOut')!}
            onClick={firebaseSignOut}
          />
        ) : (
          <CustomButton asLink to={ROUTES.signin} value={t('signin')!} />
        )}
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
