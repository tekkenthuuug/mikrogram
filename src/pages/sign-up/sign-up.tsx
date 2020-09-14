import React, { useContext, useEffect } from 'react';
import { Formik } from 'formik';

import { SignUpContainer, SignUpForm, SubmitButton } from './sign-up.styles';
import { createUserWithEmailAndPassword } from '../../firebase/auth';
import { UserContext } from '../../context/user.context';
import { Link, useHistory } from 'react-router-dom';
import { REDIRECTS, ROUTES } from '../../constants';
import { useTranslation } from 'react-i18next';
import FormInput from '../../components/form-input/form-input';
import LoaderDrawer from '../../components/loader-drawer/loader-drawer';

const SignIn = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { currentUser, setCurrentUser } = useContext(UserContext)!;

  useEffect(() => {
    if (currentUser) {
      history.push(REDIRECTS.USER_SIGN_UP);
    }
  }, [currentUser, history]);

  return (
    <SignUpContainer>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={async ({ username, password, email }) => {
          const userData = await createUserWithEmailAndPassword(
            email,
            username,
            password
          );
          setCurrentUser(userData);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <SignUpForm onSubmit={handleSubmit}>
            <LoaderDrawer visible={isSubmitting}>
              <h1>{t('signup')}</h1>
              <span>
                {t('hasAccount')}
                <Link to={ROUTES.signin}>{t('signin')}</Link>
              </span>
              <FormInput
                type='text'
                name='username'
                required
                label={t('username')!}
              />
              <FormInput
                type='email'
                name='email'
                required
                label={t('email')!}
              />
              <FormInput
                type='password'
                name='password'
                required
                label={t('password')}
              />
              <SubmitButton disabled={isSubmitting} value={t('signup')!} />
            </LoaderDrawer>
          </SignUpForm>
        )}
      </Formik>
    </SignUpContainer>
  );
};

export default SignIn;
