import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  body {
    background-color: ${props => props.theme.colors.primaryBackgroundColor};

    transition: background-color 0.2s ease;
  }
`;

export default GlobalStyle;
