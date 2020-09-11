import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

interface Props {}

const CustomButton: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
