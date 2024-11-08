import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404</h1>
      <p>Sorry, this page does not exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
