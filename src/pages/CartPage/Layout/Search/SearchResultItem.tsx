import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";
import "./SearchResultItem.css";

interface SearchedItemProps {
  title: string;
  price: number;
  description: string;
  id: string;
}

export const SearchResultItem: React.FC<SearchedItemProps> = (props) => {
  const dispatch = useDispatch();

  const showProductDetailsHandler = () => {
    dispatch(uiActions.openSearchedItemDetails(props));
  };

  return (
    <div className="search-results-item" onClick={showProductDetailsHandler}>
      <p className="search-item-title">{props.title}</p>
      <p className="search-item-price">${props.price}</p>
    </div>
  );
};
