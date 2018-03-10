import React from "react";

// Generic button
const Button = ({ style, onClick, children }) => (
  <button
    className="mdc-button mdc-button--raised"
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
