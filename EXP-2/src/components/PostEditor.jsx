import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../features/postSlice";

function PostEditor() {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const dispatch = useDispatch();

  const handleSave = () => {
    if (text.trim() === "") {
      alert("Please enter a post.");
      return;
    }

    if (editingId === null) {
      dispatch(addPost(text));
    } else {
      dispatch(
        updatePost({
          id: editingId,
          text: text,
        })
      );

      setEditingId(null);
    }

    setText("");
  };

  const handleClear = () => {
    setText("");
    setEditingId(null);
  };

  return (
    <div className="editor">
      <textarea
        placeholder="Write your post here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="buttons">
        <button onClick={handleSave}>
          {editingId === null ? "Save Post" : "Update Post"}
        </button>

        <button onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default PostEditor;