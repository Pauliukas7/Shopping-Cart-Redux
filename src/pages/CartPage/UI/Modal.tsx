import { MouseEventHandler, useRef } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import "./Modal.css";

const Modal: React.FC<React.ReactNode> = (props) => {
  const overlayRef = useRef(null);
  const dispatch = useDispatch();
  const closeCartHandler: MouseEventHandler<HTMLDivElement> = (e) => {
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
};

export default Modal;
