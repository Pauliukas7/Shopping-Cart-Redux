import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import "./CartItem.css";

// interface cartItemProps {
//   product: { title: any; price: any; id: any; total: any; quantity: any; };
//   title: string;
//   price: number;
//   id: string;
//   total: number;
//   quantity: number;
// }
interface Product {
  total: number;
  quantity: number;
  id: string;
  title: string;
  description: string;
  price: number;
}

interface cartItemProps {
  product: Product;
}
export const CartItem = (props: cartItemProps) => {
  const dispatch = useDispatch();
  const { title, price, id, total, quantity } = props.product;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <li className="item">
      <header>
        <h3 className="item-title">{title}</h3>
        <div className="price">
          ${total.toFixed(2)}{" "}
          <span className="itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          x <span>{quantity}</span>
        </div>
        <div className="actions">
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};
