import 'styled-components';

declare module 'styled-components' {
  export type DefaultThemeType = 'dark' | 'light';

  export interface DefaultTheme {
    type: DefaultThemeType;
    colors: {
      accent: string;
      buttonText: string;
      buttonHoverText: string;
      themeSelectorBackground: string;
      themeSelectorColor: string;
      text: string;
      primaryBackgroundColor: string;
      primaryBackgroundColorHover: string;
      placeholderBackground: string;
      formBackground: string;
      formInput: string;
      formInputFocus: string;
      errorColor: string;
      loadingGradientColor: string;
    };
    fonts: {
      primary: string;
    };
    logo: {
      cubeColor: string;
      outerPolyColor: string;
      innerPolyColor: string;
    };
    toggleTheme?: () => void;
  }
}
