import React from 'react';
import { path } from 'ramda';
import {
  Checkbox,
  FormControl,
  CheckboxProps,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { Control, useController } from 'react-hook-form';

interface FormCheckboxProps extends FormControlProps {
  name: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  control: Control<any>;
  _checkbox?: CheckboxProps;
}

const parseErrorKeys = (name: string): Array<string> => {
  return name.split('.');
};

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  label,
  control,
  helperText,
  isRequired,
  isInvalid,
  _checkbox,
  ...props
}) => {
  const { field, formState } = useController({ name, control });
  const error = path(['errors', ...parseErrorKeys(name), 'message'], formState) as string;

  return (
    <FormControl isRequired={isRequired} isInvalid={!!error} {...props}>
      <Checkbox
        name={name}
        onChange={(v) => field.onChange(v)}
        isChecked={!!field.value}
        value={field.value}
        fontWeight="bold"
        {..._checkbox}
      >
        {label}
      </Checkbox>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormCheckbox;
