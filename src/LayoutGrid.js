import React from "react";

// Generic layout grid component
const LayoutGrid = ({ children }) => (
  <div className="mdc-layout-grid">
    <div className="mdc-layout-grid__inner">{children}</div>
  </div>
);

export default LayoutGrid;
