function PostEditor({ post, setPost }) {
  return (
    <div className="card">
      <h2>Your Post</h2>

      <textarea
        placeholder="Share your thoughts..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
    </div>
  );
}

export default PostEditor;