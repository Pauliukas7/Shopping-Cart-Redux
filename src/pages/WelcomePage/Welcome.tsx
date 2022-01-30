import { Link } from "react-router-dom";
import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome Page</h1>
      <div>
        <Link to="foodapp">Shopping cart with Redux</Link>
      </div>
    </div>
  );
};
