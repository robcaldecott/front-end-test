import React from "react";
import classnames from "classnames";

// Generic tab component
const Tab = ({ active, onClick, children }) => (
  <a
    className={classnames("mdc-tab", { "mdc-tab--active": active })}
    onClick={onClick}
  >
    {children}
    <span className="mdc-tab__indicator" />
  </a>
);

export default Tab;
