import React from "react";

// Icon that can be used with components that toggle
const ToggleIcon = ({ expanded }) => (
  <i
    className="material-icons"
    style={{ position: "absolute", top: "1rem", right: "1rem" }}
  >
    {expanded ? "keyboard_arrow_up" : "keyboard_arrow_down"}
  </i>
);

export default ToggleIcon;
