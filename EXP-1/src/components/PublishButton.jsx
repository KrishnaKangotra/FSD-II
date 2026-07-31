function PublishButton({ post, limit, platform }) {
  const handlePublish = () => {
    if (post.trim() === "") {
      alert("⚠️ Please write a post first.");
      return;
    }

    if (post.length > limit) {
      alert(`❌ Your post exceeds the ${platform} character limit.`);
      return;
    }

    alert(`🎉 Your post has been published to ${platform}!`);
  };

  return (
    <div className="card">
      <button className="publish-btn" onClick={handlePublish}>
        🚀 Publish Post
      </button>
    </div>
  );
}

export default PublishButton;