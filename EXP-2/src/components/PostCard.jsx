import { useDispatch } from "react-redux";
import { deletePost } from "../features/postSlice";

function PostCard({ post }) {
  const dispatch = useDispatch();

  return (
    <div className="post-card">
      <p>{post.text}</p>

      <button
        onClick={() => dispatch(deletePost(post.id))}
      >
        Delete
      </button>
    </div>
  );
}

export default PostCard;