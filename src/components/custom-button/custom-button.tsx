import React from 'react';
import {
  CustomButtonContainer,
  CustomFileInput,
  FileLabel,
} from './custom-button.styles';

interface Props {}

const CustomButton: React.FC<
  Props & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type, name, className, value, ...props }) => {
  if (type === 'file') {
    return (
      <>
        <CustomFileInput name={name} id={name} type={type} {...props} />
        <FileLabel className={className} htmlFor={name}>
          {value}
        </FileLabel>
      </>
    );
  }

  return (
    <CustomButtonContainer
      value={value}
      className={className}
      type={type}
      {...props}
    />
  );
};

export default CustomButton;
