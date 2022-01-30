import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { CartButton } from "../Cart/CartButton";
import "./MainHeader.css";
import { SearchResults } from "./Search/SearchResults";
import React from "react";
import { SearchInput } from "./Search/SearchInput";

export const MainHeader: React.FC = () => {
  const searchInputRef: React.RefObject<HTMLInputElement> = React.createRef();

  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.toggleCartOn());
  };

  const showSearchResultsHandler = () => {
    if (searchInputRef && searchInputRef.current!.value.length > 0) {
      dispatch(uiActions.showSearchResults());
      dispatch(uiActions.takeSearchTextValue(searchInputRef.current!.value));
    } else {
      dispatch(uiActions.hideSearchResults());
    }
  };

  return (
    <div className="header">
      <div className="reduxcart">
        <h1 className="reduxcart-text">ReduxCart</h1>
      </div>
      <div className="search">
        <SearchInput ref={searchInputRef} onChange={showSearchResultsHandler} />

        <SearchResults />
      </div>
      <CartButton onClickCartButton={showCartHandler} />
    </div>
  );
};
