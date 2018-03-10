import React from "react";

// Render a string containing \n
const Multiline = ({ children }) => (
  <p className="mdc-typography--body1">
    {children.split("\n").map((line, index) => <span key={index}>{line}</span>)}
  </p>
);

export default Multiline;
