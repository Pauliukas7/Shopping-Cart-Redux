import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "./Cart/Cart";
import { Layout } from "./Layout/Layout";
import { SearchedItemDetails } from "./Layout/Search/SearchedItemDetails";
import Modal from "./UI/Modal";

import { Products } from "./UI/Products";
import { RootState } from "../../store";
import {
  fetchCartData,
  loadAllProducts,
  loadFeaturedProducts,
  sendCartData,
} from "../../store/data-fetching";

let isInitial = true;

export const ShoppingCart: React.FC = () => {
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);

  const searchedItemDetailsOpened = useSelector(
    (state: RootState) => state.ui.searchedItemDetailsOpened
  );

  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllProducts());
  }, []);

  useEffect(() => {
    dispatch(loadFeaturedProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart]);

  return (
    <div>
      <Layout>
        <Products />
        {showCart && (
          <Modal>
            <Cart />
          </Modal>
        )}
        {searchedItemDetailsOpened && (
          <Modal>
            <SearchedItemDetails />
          </Modal>
        )}
      </Layout>
    </div>
  );
};
