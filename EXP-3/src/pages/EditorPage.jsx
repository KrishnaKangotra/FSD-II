import Navbar from "../components/Navbar";
import { getUser } from "../utils/auth";

function EditorPage() {
  const user = getUser();

  return (
    <div>
      <Navbar />

      <div className="page">
        <h1>Editor Panel</h1>

        <p>
          Welcome, {user.username}. You can create and edit content.
        </p>

        <div className="role-card">
          <h3>Editor Permissions</h3>

          <ul>
            <li>Create content</li>
            <li>Edit content</li>
            <li>View dashboard</li>
          </ul>
        </div>

        <button className="action-button">
          Create Content
        </button>

        <button className="action-button">
          Edit Content
        </button>
      </div>
    </div>
  );
}

export default EditorPage;