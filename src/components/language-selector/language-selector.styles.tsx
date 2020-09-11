import styled from 'styled-components';

export const LangSelectorContainer = styled.div`
  position: relative;

  font-family: ${props => props.theme.fonts.primary};
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  margin-right: 14px;

  &::after {
    content: '';
    position: absolute;
    top: 11px;
    right: -14px;

    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid ${props => props.theme.colors.text};
  }
`;

export const SelectedLang = styled.span`
  text-transform: uppercase;
`;

export const Dropdown = styled.div`
  position: absolute;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  border-radius: 12px;

  cursor: default;

  background-color: ${props => props.theme.colors.primaryBackgroundColor};

  width: 60px;
  padding: 8px 8px;

  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.3);

  & > div {
    padding: 2px 0;
    border-radius: 8px;
    width: 100%;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: ${props =>
        props.theme.colors.primaryBackgroundColorHover};
    }
  }
`;
