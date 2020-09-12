import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const defaultButtonCss = css`
  font-size: 1.44em;

  border-radius: 12px;

  padding: 6px 30px;

  font-family: ${props => props.theme.fonts.primary};
  font-weight: bold;

  transition: all 0.15s ease;
  cursor: pointer;

  border: 3px solid ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.buttonText};

  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.buttonHoverText};
  }
`;

export const CustomButtonContainer = styled.input`
  ${defaultButtonCss}
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
  ${defaultButtonCss}

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomLink = styled(Link)`
  ${defaultButtonCss}
`;
