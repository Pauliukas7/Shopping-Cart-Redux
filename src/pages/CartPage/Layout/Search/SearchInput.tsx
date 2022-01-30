import React from "react";

import "./SearchInput.css";

export const SearchInput = React.forwardRef((props: any, ref) => (
  <input
    type="text"
    placeholder="Search for products..."
    className="search-input"
    {...props}
    ref={ref}
  />
));
