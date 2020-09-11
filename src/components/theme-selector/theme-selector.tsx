import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { SelectorContainer, Selector } from './theme-selector.styles';

const ThemeSelector: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);

  return (
    <SelectorContainer onClick={theme.toggleTheme}>
      <Selector themeType={theme.type} />
    </SelectorContainer>
  );
};

export default ThemeSelector;
