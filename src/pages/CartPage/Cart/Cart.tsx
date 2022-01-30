import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import "./Cart.css";
import { RootState } from "../../../store";
import { CartProduct } from "../../../store/cart-slice";
import { uiActions } from "../../../store/ui-slice";

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const closeCartHandler = () => {
    dispatch(uiActions.toggleCartOff());
  };

  const cartItems: CartProduct[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const totalPrice: number = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  const cartNotEmpty = (
    <div className="cart">
      <button className="close-cart" onClick={closeCartHandler}>
        X
      </button>
      <ul>
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            product={{
              total: product.totalPrice,
              quantity: product.quantity,
              id: product.id,
              title: product.title,
              description: product.description,
              price: product.price,
            }}
          />
        ))}
      </ul>
      <div className="total-price-and-order-button">
        <h2>Total price: ${totalPrice.toFixed(2)}</h2>
        <button className="button-order">Order</button>
      </div>
    </div>
  );

  const cartEmpty = (
    <div className="cart">
      <button className="close-cart" onClick={closeCartHandler}>
        X
      </button>
      <h2>
        Your Cart is empty. You can add products to the cart by clicking '
        <span className="cartempty-add-to-cart">Add to Cart</span>' button
      </h2>
    </div>
  );

  const CartElement = cartItems.length > 0 ? cartNotEmpty : cartEmpty;

  return CartElement;
};
