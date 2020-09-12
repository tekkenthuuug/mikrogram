import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 32px;

  &:first-of-type {
    margin-top: 18px;
  }

  position: relative;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 18px;

  position: absolute;

  top: 12px;
  left: 2px;
  cursor: text;

  transition: all 0.2s ease;
`;

export const Input = styled.input`
  margin-top: 4px;
  height: 40px;
  width: 320px;

  border-bottom: 3px solid ${props => props.theme.colors.formInput};

  font-size: 16px;

  padding: 0 8px;

  transition: all 0.2s ease;

  &:focus + ${Label} {
    top: -12px;
    transform: scale(0.8);
    transform-origin: left top;

    color: ${props => props.theme.colors.formInputFocus};
  }

  &:valid + ${Label} {
    top: -12px;
    transform: scale(0.8);
    transform-origin: left top;
  }

  &:focus {
    border-bottom-color: ${props => props.theme.colors.formInputFocus};
  }
`;
