import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  type: 'light',
  colors: {
    accent: '#4FD176',
    buttonText: '#4FD176',
    buttonHoverText: '#FFF',
    themeSelectorBackground: '#707070',
    themeSelectorColor: '#FFF',
    text: '#878787',
    primaryBackgroundColor: '#FFF',
    primaryBackgroundColorHover: '#EEE',
    placeholderBackground: '#BCBCBC',
    formBackground: '#EEE',
    formInput: '#878787',
    formInputFocus: '#4FD176',
    errorColor: '#ff0000',
  },
  fonts: {
    primary: "'Roboto Mono', sans-serif",
  },
  logo: {
    cubeColor: '#fff',
    innerPolyColor: '#78A3F9',
    outerPolyColor: '#78ECF9',
  },
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  type: 'dark',
  colors: {
    ...lightTheme.colors,
    themeSelectorBackground: '#FFF',
    themeSelectorColor: '#707070',
    text: '#FFF',
    primaryBackgroundColor: '#3D3D3D',
    primaryBackgroundColorHover: '#5C5C5C',
    buttonHoverText: '#3D3D3D',
  },
  logo: {
    ...lightTheme.logo,
    outerPolyColor: '#1E5D64',
  },
};
