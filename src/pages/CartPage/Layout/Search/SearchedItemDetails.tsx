import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { cartActions } from "../../../../store/cart-slice";
import { uiActions } from "../../../../store/ui-slice";

import "./SearchedItemDetails.css";

export const SearchedItemDetails = () => {
  const dispatch = useDispatch();

  const itemDetails = useSelector(
    (state: RootState) => state.ui.searchedItemDetails
  );

  const closeItemDetailsHandler = () => {
    dispatch(uiActions.hideSearchedItemDetails());
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        ...itemDetails,
      })
    );
  };
  return (
    <div className="searched-item-container">
      <button
        className="button-close-searched-item"
        onClick={closeItemDetailsHandler}
      >
        X
      </button>

      <div className="searched-items-header">
        <h3 className="searched-item-title">{itemDetails.title}</h3>
        <div className="searched-item-price">
          ${itemDetails.price.toFixed(2)}
        </div>
      </div>
      <div className="description-and-button-container">
        <div className="searched-item-description">
          {itemDetails.description}
        </div>
        <button className="button-add-to-cart" onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
