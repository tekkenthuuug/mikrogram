import React, { Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import Header from './components/header/header';
import Home from './pages/home/home';
import { ROUTES } from './constants';
import LoadingScreen from './components/loading-screen/loading-screen';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import useThemeState from './utils/useThemeState';
import { User } from './types';
import { listenToAuthState } from './firebase/auth';
import { UserContext } from './context/user.context';
import { CacheContext } from './context/cache.context';
import useAppCache from './utils/useAppCache';

function App() {
  const { theme } = useThemeState();
  const [user, setUser] = useState<null | User>(null);
  const [fetchingUser, setFetchingUser] = useState<boolean>(true);
  const appCache = useAppCache();

  useEffect(() => {
    const unsubscribe = listenToAuthState((user, error) => {
      setUser(user);
      setFetchingUser(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingScreen />}>
        <CacheContext.Provider value={appCache}>
          <UserContext.Provider value={user}>
            <GlobalStyle />
            {fetchingUser && <LoadingScreen />}
            <Header />
            <Switch>
              <Route exact path={ROUTES.home} component={Home} />
              <Route path={ROUTES.signin} component={SignIn} />
              <Route path={ROUTES.signup} component={SignUp} />
            </Switch>
          </UserContext.Provider>
        </CacheContext.Provider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
