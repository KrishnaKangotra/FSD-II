import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="unauthorized">
      <div className="unauthorized-card">
        <h1>Access Denied</h1>

        <p>
          You do not have permission to access this page.
        </p>

        <Link to="/dashboard">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;