import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";
import "./SearchResultItem.css";

export const SearchResultItem = (props: any) => {
  const { title, price, description } = props;

  const dispatch = useDispatch();

  const showProductDetailsHandler = () => {
    dispatch(uiActions.openSearchedItemDetails(props));
    console.log(description);
  };

  return (
    <div className="search-results-item" onClick={showProductDetailsHandler}>
      <p className="search-item-title">{title}</p>
      <p className="search-item-price">${price}</p>
    </div>
  );
};
