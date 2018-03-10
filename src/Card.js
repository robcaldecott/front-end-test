import React from "react";

// Generic card
const Card = ({ style, children }) => (
  <div className="mdc-card" style={style}>
    {children}
  </div>
);

export default Card;
