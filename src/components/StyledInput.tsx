import clsx from 'clsx';
import { Field, useField } from 'formik';
import React from 'react';

const StyledInput: React.FC<Props> = ({ className, ...props }) => {
  const [field] = useField(props);
  return <Field {...field} {...props} className={clsx(styledInputStyles, className)} />;
};
export const styledInputStyles = `border border-gray-200 px-6 py-4 rounded-lg w-full text-lg focus:outline-none`;

export const Input: React.FC<Props & { label: string }> = ({ label, ...inputProps }) => {
  return (
    <label>
      {label}
      <StyledInput {...inputProps} />
    </label>
  );
};

type Props = { className?: string; name: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
