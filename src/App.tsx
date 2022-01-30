import { Route, Routes } from "react-router";
import { ShoppingCart } from "./pages/CartPage/ShoppingCart";
import { Welcome } from "./pages/WelcomePage/Welcome";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/foodapp" element={<ShoppingCart />} />
    </Routes>
  );
};

export default App;
