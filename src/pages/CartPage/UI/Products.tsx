import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ProductItem } from "./ProductItem";
import "./Products.css";

export function Products() {
  const FEATURED_PRODUCTS = useSelector(
    (state: RootState) => state.ui.featuredProducts
  );

  return (
    <ul className="products">
      {FEATURED_PRODUCTS.map((product) => (
        <ProductItem
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </ul>
  );
}
