import { useRef } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import "./Modal.css";

export default function Modal(props: any) {
  const overlayRef = useRef(null);
  const dispatch = useDispatch();
  const closeCartHandler = (e: any) => {
    if (e.target === overlayRef.current) {
      dispatch(uiActions.toggleCartOff());
      dispatch(uiActions.hideSearchedItemDetails());
    }
  };

  return (
    <div className="modal">
      <div className="overlay" onClick={closeCartHandler} ref={overlayRef}>
        {props.children}
      </div>
    </div>
  );
}
