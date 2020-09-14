import styled from 'styled-components';

import CustomButton from '../../components/custom-button/custom-button';

export const SignUpContainer = styled.div``;

export const SignUpForm = styled.form`
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
