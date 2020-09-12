import { useField } from 'formik';
import React from 'react';
import { Group, Input, Label } from './form-input.styles';

interface Props {
  label: string;
  inputClassName?: string;
  name: string;
}

const FormInput: React.FC<
  Props & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, className, inputClassName, name, id, ...props }) => {
  const [field] = useField(name);

  return (
    <Group className={className}>
      <Input {...props} {...field} id={id || name} className={inputClassName} />
      <Label htmlFor={id || name}>{label}</Label>
    </Group>
  );
};

export default FormInput;
