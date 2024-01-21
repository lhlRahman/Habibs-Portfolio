import React from 'react';
import './Button.css'; 

const Button = ({children}) => {

  return (
    <div className="container">
      <button className={`button`}>
        <h1 className="button__text">{children}</h1>
      </button>
    </div>
  );
};

export default Button;
