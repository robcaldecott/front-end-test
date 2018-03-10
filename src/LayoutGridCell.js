import React from "react";
import classnames from "classnames";

// Layout grid cell component
const LayoutGridCell = ({ desktop, tablet, children }) => (
  <div
    className={classnames("mdc-layout-grid__cell", {
      [`mdc-layout-grid__cell--span-${desktop}-desktop`]: desktop,
      [`mdc-layout-grid__cell--span-${tablet}-tablet`]: tablet
    })}
  >
    {children}
  </div>
);

export default LayoutGridCell;
