import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPost, updatePost } from "../features/postSlice";

function PostEditor() {
  const dispatch = useDispatch();

  const platform = useSelector(
    (state) => state.platform.selectedPlatform
  );

  const editingPost = useSelector(
    (state) => state.posts.editingPost
  );

  const [text, setText] = useState("");

  useEffect(() => {
    if (editingPost) {
      setText(editingPost.text);
    }
  }, [editingPost]);

  const handleSubmit = () => {
    if (text.trim() === "") {
      alert("Please enter a post.");
      return;
    }

    if (editingPost) {
      dispatch(
        updatePost({
          id: editingPost.id,
          text,
          platform,
        })
      );
    } else {
      dispatch(
        addPost({
          text,
          platform,
        })
      );
    }

    setText("");
  };

  return (
    <div className="section">
      <label>Write Post</label>

      <textarea
        rows="5"
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button onClick={handleSubmit}>
        {editingPost ? "Update Post" : "Save Post"}
      </button>
    </div>
  );
}

export default PostEditor;