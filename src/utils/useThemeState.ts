import { useState } from 'react';
import { DefaultThemeType } from 'styled-components';
import { LOCAL_STORAGE_KEYS } from '../constants';
import { darkTheme, lightTheme } from '../styles/themes';

const useThemeState = () => {
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

  return { theme: { ...theme, toggleTheme }, setTheme };
};

export default useThemeState;
