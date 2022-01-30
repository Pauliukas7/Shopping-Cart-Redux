import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import "./CartButton.css";

interface CartButtonProps {
  onClickCartButton: () => void;
}

export const CartButton: React.FC<CartButtonProps> = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  useEffect(() => {
    if (cartQuantity === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);

  let buttonClassname = btnIsHighlighted ? "cartbutton bump" : "cartbutton";

  return (
    <button onClick={props.onClickCartButton} className={buttonClassname}>
      <span>My Cart</span>
      <span className="badge">{cartQuantity}</span>
    </button>
  );
};
