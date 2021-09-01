import React from 'react';
import { FormControl } from 'react-bootstrap';
import { ErrorMessage } from '@hookform/error-message';

function CheckTextArea({
  placeholder,
  label,
  describedby,
  as,
  register,
  name,
  error,
  className,
}) {
  return (
    <div style={{ width: '95%' }}>
      <FormControl
        placeholder={placeholder}
        aria-label={label}
        aria-describedby={describedby}
        as={as}
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

export default CheckTextArea;
