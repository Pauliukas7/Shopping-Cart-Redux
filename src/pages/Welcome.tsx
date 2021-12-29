import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <div>
        <Link to="foodapp">Shopping cart with Redux</Link>
      </div>
    </div>
  );
};
