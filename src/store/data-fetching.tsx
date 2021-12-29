import { cartActions, CartProduct } from "./cart-slice";
import { uiActions } from "./ui-slice";

interface CartInterface {
  items: CartProduct[];
  totalQuantity: number;
  changed: boolean;
  totalPrice: number;
}

export const sendCartData = (cart: CartInterface) => {
  return async () => {
    const sendRequest = async () => {
      await fetch(
        "https://react-http-66d97-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice,
          }),
        }
      );
    };
    try {
      await sendRequest();
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-66d97-default-rtdb.firebaseio.com/cart.json"
      );

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalPrice: cartData.totalPrice || 0,
        })
      );
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const loadFeaturedProducts = () => {
  return async (dispatch: any) => {
    const loadProducts = async () => {
      const response = await fetch(
        "https://react-http-66d97-default-rtdb.firebaseio.com/featuredProducts.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const featured = await loadProducts();
      dispatch(uiActions.load(featured));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

export const loadAllProducts = () => {
  return async (dispatch: any) => {
    const fetchAllProducts = async () => {
      const response = await fetch(
        "https://react-http-66d97-default-rtdb.firebaseio.com/allProducts.json"
      );
      const data = await response.json();
      return data;
    };
    try {
      const allProducts = await fetchAllProducts();

      dispatch(uiActions.loadAllProducts(allProducts));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
