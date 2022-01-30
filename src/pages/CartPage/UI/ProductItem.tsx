import { useDispatch } from "react-redux";

import "./ProductItem.css";
import { cartActions } from "../../../store/cart-slice";

interface ProductItemProps {
  title: string;
  price: number;
  description: string;
  id: string;
}

export const ProductItem: React.FC<ProductItemProps> = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
      })
    );
  };

  return (
    <li className="product-item">
      <div className="item-title-and-price-container">
        <div className="item-title">{title}</div>
        <div className="item-price">${price.toFixed(2)}</div>
      </div>
      <div className="item-description-and-button-container">
        <div className="item-description">{description}</div>

        <button className="button-add" onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </li>
  );
};
