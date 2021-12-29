import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { ProductsInterface } from "../../../../store/ui-slice";

import { SearchResultItem } from "./SearchResultItem";
import "./SearchResults.css";

export const SearchResults = (props: any) => {
  const allProducts = useSelector((state: RootState) => state.ui.allProducts);
  const showResults: boolean = useSelector(
    (state: RootState) => state.ui.searchResultsVisible
  );
  const inputValue: string = useSelector(
    (state: RootState) => state.ui.inputText
  );
  const inputValueIsValid = inputValue.length > 0;

  const allItems: ProductsInterface[] = [];
  for (const category of allProducts) allItems.push(category);

  const filteredProducts = allItems.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <ul className="search-results">
      {showResults &&
        inputValueIsValid &&
        filteredProducts.map((product) => (
          <SearchResultItem
            title={product.title}
            price={product.price}
            key={product.id}
            id={product.id}
            description={product.description}
          />
        ))}
    </ul>
  );
};
