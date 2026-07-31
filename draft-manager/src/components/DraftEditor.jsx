function DraftEditor({ post, setPost }) {
  return (
    <div className="editor">
      <textarea
        placeholder="Write your draft here..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
    </div>
  );
}

export default DraftEditor;