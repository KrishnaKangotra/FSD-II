import { useSelector } from "react-redux";

import { filteredPosts } from "../selectors/selectors";

import PostCard from "./PostCard";

function PostList() {

  const posts = useSelector(filteredPosts);

  return (

    <div className="saved-posts">

      <h2>
        Saved Posts ({posts.length})
      </h2>

      {posts.length === 0 ? (

        <p>No matching posts found.</p>

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