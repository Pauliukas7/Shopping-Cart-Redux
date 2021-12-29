import { useSelector } from "react-redux";
import { Cart } from "../pages/CartPage/Cart/Cart";
import Layout from "../pages/CartPage/Layout/Layout";
import { SearchedItemDetails } from "../pages/CartPage/Layout/Search/SearchedItemDetails";
import Modal from "../pages/CartPage/UI/Modal";

import { Products } from "../pages/CartPage/UI/Products";
import { RootState } from "../store";

export const ShoppingCart = () => {
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);

  const searchedItemDetailsOpened = useSelector(
    (state: RootState) => state.ui.searchedItemDetailsOpened
  );

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
