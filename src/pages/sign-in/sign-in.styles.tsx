import styled from 'styled-components';

import CustomButton from '../../components/custom-button/custom-button';

export const SignInContainer = styled.div``;

export const SignInForm = styled.form`
  position: relative;
  overflow: hidden;

  background-color: ${props => props.theme.colors.formBackground};
  width: 600px;

  margin: 42px auto 0 auto;
  border-radius: 20px;
  padding: 24px;

  color: ${props => props.theme.colors.formInput};

  font-family: ${props => props.theme.fonts.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled(CustomButton).attrs(() => ({
  type: 'submit',
}))`
  margin-top: 24px;

  &:hover {
    color: ${props => props.theme.colors.formBackground};
  }
`;

export const Separator = styled.div`
  height: 2px;
  width: 320px;
  background-color: ${props => props.theme.colors.formInput};
  opacity: 0.3;
  margin: 24px 0;
`;

export const GoogleButton = styled.input.attrs(() => ({
  type: 'button',
}))`
  height: 40px;
  width: 320px;
  background-color: #4285f4;
  border-radius: 12px;
  color: #fff;
  font-family: ${props => props.theme.fonts.primary};
  font-weight: bold;
  font-size: 18px;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: blue;
  }
`;
