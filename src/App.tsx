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

function App() {
  const { theme } = useThemeState();
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    listenToAuthState((user, error) => {
      setUser(user);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={user}>
        <Suspense fallback={<LoadingScreen />}>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path={ROUTES.home} component={Home} />
            <Route path={ROUTES.signin} component={SignIn} />
            <Route path={ROUTES.signup} component={SignUp} />
          </Switch>
        </Suspense>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
