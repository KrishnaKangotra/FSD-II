import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  logout,
  getUser,
} from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div>
        <Link to="/dashboard">
          Dashboard
        </Link>
      </div>

      <div>

        {user.role === "Admin" && (
          <Link to="/admin">
            Admin
          </Link>
        )}

        {(user.role === "Admin" ||
          user.role === "Editor") && (
          <Link to="/editor">
            Editor
          </Link>
        )}

        <button
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;