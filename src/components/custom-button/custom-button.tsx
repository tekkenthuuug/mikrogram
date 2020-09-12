import React from 'react';
import {
  CustomButtonContainer,
  CustomFileInput,
  FileLabel,
  CustomLink,
} from './custom-button.styles';

interface Props {
  asLink?: boolean;
  to?: string;
}

const CustomButton: React.FC<
  Props & React.InputHTMLAttributes<HTMLInputElement>
> = ({ asLink, to = '/', type, name, className, value, ...props }) => {
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

  if (asLink) {
    return (
      <CustomLink to={to} className={className}>
        {value}
      </CustomLink>
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
