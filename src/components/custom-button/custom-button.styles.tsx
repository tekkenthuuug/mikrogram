import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
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
