import styled, { css } from 'styled-components';

const buttonCss = css`
  font-size: 1.44em;

  border: 3px solid ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.buttonText};
  border-radius: 12px;

  padding: 6px 30px;

  font-family: ${props => props.theme.fonts.primary};
  font-weight: bold;

  transition: all 0.15s ease;

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.buttonHoverText};
  }
`;

export const CustomButtonContainer = styled.input`
  ${buttonCss}
`;

export const CustomFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const FileLabel = styled.label`
  ${buttonCss}
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
