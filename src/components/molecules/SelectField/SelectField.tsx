import React from 'react';
import { Select, Label, type SelectOption } from '../../atoms';

interface SelectFieldProps {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  required?: boolean;
  disabled?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  options,
  required = false,
  disabled = false
}) => {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        disabled={disabled}
      />
    </div>
  );
};
