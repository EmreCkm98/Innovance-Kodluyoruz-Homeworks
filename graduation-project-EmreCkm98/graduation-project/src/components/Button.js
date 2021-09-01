import React from 'react';

function Button({ buttonText, buttonClass, type }) {
  return (
    <button className={`${buttonClass}`} type={type}>
      {buttonText}
    </button>
  );
}

export default Button;
