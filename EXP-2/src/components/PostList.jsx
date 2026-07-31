import { useSelector } from "react-redux";
import PostCard from "./PostCard";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="post-list">
      <h2>Saved Posts</h2>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))
      )}
    </div>
  );
}

export default PostList;