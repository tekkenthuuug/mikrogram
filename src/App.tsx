import React, { Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { darkTheme, lightTheme } from './styles/themes';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider, DefaultThemeType } from 'styled-components';

import Header from './components/header/header';
import Home from './pages/home/home';
import { LOCAL_STORAGE_KEYS, ROUTES } from './constants';
import LoadingScreen from './components/loading-screen/loading-screen';

function App() {
  const localStorageTheme = localStorage.getItem(
    LOCAL_STORAGE_KEYS.theme
  ) as DefaultThemeType;

  const [theme, setTheme] = useState(
    localStorageTheme === 'dark' ? darkTheme : lightTheme
  );

  const toggleTheme = () => {
    if (theme.type === 'dark') {
      setTheme(lightTheme);
      localStorage.setItem(LOCAL_STORAGE_KEYS.theme, 'light');
    } else {
      setTheme(darkTheme);
      localStorage.setItem(LOCAL_STORAGE_KEYS.theme, 'dark');
    }
  };

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <Suspense fallback={<LoadingScreen />}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path={ROUTES.home} component={Home} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
