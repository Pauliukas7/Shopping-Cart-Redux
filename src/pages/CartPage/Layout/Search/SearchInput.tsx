import React from "react";

import "./SearchInput.css";

export const SearchInput = React.forwardRef((props: any, ref: any) => (
  <input
    type="text"
    placeholder="Search for products..."
    className="search-input"
    {...props}
    ref={ref}
  />
));
