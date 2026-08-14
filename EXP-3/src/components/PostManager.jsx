import { useEffect, useState } from "react";
import { getUser } from "../utils/auth";

function PostManager() {
  const user = getUser();
  const role = user?.role;

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");

    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [text, setText] = useState("");
  const [platform, setPlatform] = useState("LinkedIn");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const canCreate =
    role === "Admin" || role === "Editor";

  const canEdit =
    role === "Admin" || role === "Editor";

  const canDelete =
    role === "Admin";

  const handleSave = () => {
    if (text.trim() === "") {
      alert("Please write something first.");
      return;
    }

    if (editingId !== null) {
      setPosts(
        posts.map((post) =>
          post.id === editingId
            ? {
                ...post,
                text: text,
                platform: platform,
              }
            : post
        )
      );

      setEditingId(null);
    } else {
      const newPost = {
        id: Date.now(),
        text: text,
        platform: platform,
        author: user.username,
      };

      setPosts([...posts, newPost]);
    }

    setText("");
    setPlatform("LinkedIn");
  };

  const handleEdit = (post) => {
    setText(post.text);
    setPlatform(post.platform);
    setEditingId(post.id);
  };

  const handleDelete = (id) => {
    setPosts(
      posts.filter((post) => post.id !== id)
    );
  };

  const cancelEdit = () => {
    setText("");
    setPlatform("LinkedIn");
    setEditingId(null);
  };

  return (
    <div className="post-manager">

      {canCreate && (
        <div className="post-editor">

          <h2>
            {editingId !== null
              ? "Edit Post"
              : "Create Post"}
          </h2>

          <select
            value={platform}
            onChange={(e) =>
              setPlatform(e.target.value)
            }
          >
            <option value="LinkedIn">
              LinkedIn
            </option>

            <option value="Facebook">
              Facebook
            </option>

            <option value="Instagram">
              Instagram
            </option>

            <option value="X">
              X
            </option>
          </select>

          <textarea
            value={text}
            placeholder="Write your post..."
            onChange={(e) =>
              setText(e.target.value)
            }
          />

          <div className="post-actions">

            <button
              className="action-button"
              onClick={handleSave}
            >
              {editingId !== null
                ? "Update Post"
                : "Create Post"}
            </button>

            {editingId !== null && (
              <button
                className="cancel-button"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}

          </div>

        </div>
      )}

      <div className="saved-posts">

        <h2>
          Saved Posts ({posts.length})
        </h2>

        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <div
              className="post-card"
              key={post.id}
            >

              <div className="post-header">

                <h3>{post.platform}</h3>

                <span>
                  By {post.author}
                </span>

              </div>

              <p>{post.text}</p>

              {(canEdit || canDelete) && (
                <div className="post-buttons">

                  {canEdit && (
                    <button
                      className="edit-button"
                      onClick={() =>
                        handleEdit(post)
                      }
                    >
                      Edit
                    </button>
                  )}

                  {canDelete && (
                    <button
                      className="delete-button"
                      onClick={() =>
                        handleDelete(post.id)
                      }
                    >
                      Delete
                    </button>
                  )}

                </div>
              )}

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default PostManager;