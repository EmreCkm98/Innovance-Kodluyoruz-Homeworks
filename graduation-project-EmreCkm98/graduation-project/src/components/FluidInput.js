/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';

function FluidInput({
  type,
  label,
  style,
  id,
  register,
  name,
  error,
  placeholder,
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const focusField = () => {
    setFocused(!focused);
  };
  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    setValue(value);
  };

  let inputClass = 'fluid-input';
  if (focused) {
    inputClass += ' fluid-input--focus';
  } else if (value !== '') {
    inputClass += ' fluid-input--open';
  }

  return (
    <div className={inputClass} style={style}>
      <div className="fluid-input-holder">
        <input
          className="fluid-input-input"
          type={type}
          id={id}
          placeholder={placeholder}
          onFocus={focusField}
          onBlur={focusField}
          onChange={handleChange}
          autoComplete="off"
          {...register(name)}
        />
        <ErrorMessage
          errors={error}
          name={name}
          render={({ message }) => <p>{message}</p>}
        />
        <label className="fluid-input-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

export default FluidInput;
