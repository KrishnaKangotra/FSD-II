import React from "react";

import { useDispatch } from "react-redux";

import {
  deletePost,
  startEditing,
} from "../features/postSlice";

const PostCard = React.memo(({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className="post-card">

      <h3>{post.platform}</h3>

      <p>{post.text}</p>

      <div className="button-group">

        <button
          className="edit-btn"
          onClick={() =>
            dispatch(startEditing(post))
          }
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            dispatch(deletePost(post.id))
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
});

export default PostCard;