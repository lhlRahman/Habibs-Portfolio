import React from 'react';
import './Button.css'; 

const Button = ({children}) => {

  return (
    <div className="container">
      <button className={`button`}>
        <span className="button__text">{children}</span>
      </button>
    </div>
  );
};

export default Button;
