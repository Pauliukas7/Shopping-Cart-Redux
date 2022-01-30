import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { Products } from "../../../../store/ui-slice";

import { SearchResultItem } from "./SearchResultItem";
import "./SearchResults.css";

export const SearchResults: React.FC = () => {
  const allProducts = useSelector((state: RootState) => state.ui.allProducts);
  const showResults: boolean = useSelector(
    (state: RootState) => state.ui.searchResultsVisible
  );
  const inputValue: string = useSelector(
    (state: RootState) => state.ui.inputText
  );
  const inputValueIsValid = inputValue.length > 0;

  const allItems: Products[] = [];
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
            id={product.id}
            title={product.title}
            price={product.price}
            key={product.id}
            description={product.description}
          />
        ))}
    </ul>
  );
};
