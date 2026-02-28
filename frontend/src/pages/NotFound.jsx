import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1 className="text-danger">404</h1>
      <p>Page not found.</p>
      <Link to="/" className="btn btn-purple">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;