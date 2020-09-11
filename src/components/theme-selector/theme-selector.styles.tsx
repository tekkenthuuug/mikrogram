import styled, { css, DefaultThemeType } from 'styled-components';

export const SelectorContainer = styled.div`
  position: relative;

  border-radius: 30px;
  width: 60px;
  height: 30px;

  background-color: ${props => props.theme.colors.themeSelectorBackground};

  cursor: pointer;
`;

interface ISelector {
  themeType: DefaultThemeType;
}

const darkSelectorCss = css`
  left: 34px;
  transform: scale(-1, -1);
`;
const lightSelectorCss = css`
  left: 3px;
`;

export const Selector = styled.div<ISelector>`
  position: absolute;

  border-radius: 30px;

  top: 3px;

  height: 24px;
  width: 24px;

  background-color: ${props => props.theme.colors.themeSelectorColor};

  transition: all 0.2s ease;

  &:hover {
  }

  ${props => (props.themeType === 'dark' ? darkSelectorCss : lightSelectorCss)}
`;
