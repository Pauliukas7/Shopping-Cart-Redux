import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import "./CartButton.css";

interface CartButtonProps {
  onClickCartButton: () => void;
}

const CartButton = (props: CartButtonProps) => {
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  return (
    <button onClick={props.onClickCartButton} className="cartbutton">
      <span>My Cart</span>
      <span className="badge">{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
