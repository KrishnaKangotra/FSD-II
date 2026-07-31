function CharacterStatus({ post, limit, platform }) {
  const remaining = limit - post.length;

  return (
    <div className="card">
      <h2>Post Status</h2>

      <p>
        Platform: <strong>{platform}</strong>
      </p>

      <p>
        Characters: {post.length} / {limit}
      </p>

      {remaining >= 0 ? (
        <p style={{ color: "green" }}>
          ✅ {remaining} characters remaining
        </p>
      ) : (
        <p style={{ color: "red" }}>
          ❌ Exceeded limit by {Math.abs(remaining)} characters
        </p>
      )}
    </div>
  );
}

export default CharacterStatus;