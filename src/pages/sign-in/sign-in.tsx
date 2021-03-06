import React, { useContext, useEffect } from 'react';
import { Formik } from 'formik';

import {
  SignInContainer,
  SignInForm,
  SubmitButton,
  Separator,
  GoogleButton,
} from './sign-in.styles';
import {
  signInWithGoogle,
  signInWithEmailAndPassword,
} from '../../firebase/auth';
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
      history.push(REDIRECTS.USER_SIGN_IN);
    }
  }, [currentUser, history]);

  return (
    <SignInContainer>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async ({ email, password }) => {
          const userData = await signInWithEmailAndPassword(email, password);
          setCurrentUser(userData);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <SignInForm onSubmit={handleSubmit}>
            <LoaderDrawer visible={isSubmitting}>
              <h1>{t('signin')}</h1>
              <span>
                {t('noAccount.text')}
                <Link to={ROUTES.signup}> {t('noAccount.link')}</Link>
              </span>
              <FormInput
                type='text'
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
              <SubmitButton disabled={isSubmitting} value={t('signin')!} />
              <Separator />
              <GoogleButton
                onClick={signInWithGoogle}
                value={t('signInWithGoogle')!}
              />
            </LoaderDrawer>
          </SignInForm>
        )}
      </Formik>
    </SignInContainer>
  );
};

export default SignIn;
