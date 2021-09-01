import React from 'react';
import { FormControl } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';

function CheckInput({
  placeholder,
  label,
  describedby,
  register,
  name,
  error,
}) {
  return (
    <div>
      <FormControl
        placeholder={placeholder}
        aria-label={label}
        aria-describedby={describedby}
        {...register(name)}
      />
      <ErrorMessage
        errors={error}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
    </div>
  );
}

export default CheckInput;
