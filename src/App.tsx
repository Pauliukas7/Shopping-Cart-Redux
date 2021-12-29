import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Welcome } from "./pages/Welcome";
import { RootState } from "./store";
import {
  fetchCartData,
  loadAllProducts,
  loadFeaturedProducts,
  sendCartData,
} from "./store/data-fetching";
let isInitial = true;
function App() {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllProducts());
    console.log("loadAllProducts");
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadFeaturedProducts());
    console.log("loadFeaturedProducts");
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
    console.log("fetchCartData");
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
      console.log("sendCartData");
    }
  }, [cart, dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/foodapp" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
