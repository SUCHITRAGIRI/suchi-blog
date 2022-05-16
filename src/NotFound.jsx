import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="NotFound">
      <h2>Sorry</h2>
      <p>The Page cannot be found!</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default NotFound;
