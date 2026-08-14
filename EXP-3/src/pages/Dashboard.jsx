import Navbar from "../components/Navbar";
import PostManager from "../components/PostManager";
import { getUser } from "../utils/auth";

function Dashboard() {
  const user = getUser();

  return (
    <div>
      <Navbar />

      <div className="page">

        <div className="dashboard-header">
          <h1>Dashboard</h1>

          <p>
            Welcome, {user.username}
          </p>

          <span className="role-badge">
            {user.role}
          </span>
        </div>

        <PostManager />

      </div>
    </div>
  );
}

export default Dashboard;