import React from 'react';
import { path } from 'ramda';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormControlProps,
  RadioGroupProps,
  RadioGroup,
} from '@chakra-ui/react';
import { Control, useController } from 'react-hook-form';

interface IFormRadioGroup extends FormControlProps {
  name: string;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  control: Control<any>;
  _radioGroup?: Omit<RadioGroupProps, 'children'>;
}

const FormRadioGroup: React.FC<IFormRadioGroup> = ({
  name,
  label,
  control,
  helperText,
  isRequired,
  isInvalid,
  _radioGroup,
  children,
  ...props
}) => {
  const { field, formState } = useController({ name, control });
  const error = path(['errors', name, 'message'], formState) as string;

  return (
    <FormControl pb={2} isRequired={isRequired} isInvalid={!!error} {...props}>
      <FormLabel fontWeight="semibold">{label}</FormLabel>

      <RadioGroup
        name={name}
        onChange={(v) => field.onChange(v)}
        value={field.value}
        {..._radioGroup}
      >
        {children}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormRadioGroup;
