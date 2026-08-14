import Navbar from "../components/Navbar";
import { getUser } from "../utils/auth";

function AdminPage() {
  const user = getUser();

  return (
    <div>
      <Navbar />

      <div className="page">
        <h1>Admin Panel</h1>

        <p>
          Welcome, {user.username}. You have full administrative access.
        </p>

        <div className="role-card">
          <h3>Admin Permissions</h3>

          <ul>
            <li>Manage users</li>
            <li>View reports</li>
            <li>Manage application settings</li>
            <li>Access editor features</li>
          </ul>
        </div>

        <button className="action-button">
          Manage Users
        </button>

        <button className="action-button">
          View Reports
        </button>
      </div>
    </div>
  );
}

export default AdminPage;