import React from "react";
import Tab from "./Tab";

// The main navigation tab
const TabBar = ({ activeTab, onClick }) => (
  <nav className="mdc-tab-bar">
    {["User", "Posts", "Albums", "Todos"].map((label, index) => (
      <Tab
        key={index}
        active={index === activeTab}
        onClick={() => onClick(index)}
      >
        {label}
      </Tab>
    ))}
  </nav>
);

export default TabBar;
