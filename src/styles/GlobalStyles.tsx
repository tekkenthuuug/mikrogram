import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  button, input[type='button'] {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button, input {
    outline: none;
    background: none;
    border: none;
  }


  body {
    background-color: ${props => props.theme.colors.primaryBackgroundColor};
  }
`;

export default GlobalStyle;
