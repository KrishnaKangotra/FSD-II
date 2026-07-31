function ActionButtons({ saveDraft, clearPost }) {
  return (
    <div className="buttons">
      <button onClick={saveDraft}>Save Draft</button>
      <button onClick={clearPost}>Clear</button>
    </div>
  );
}

export default ActionButtons;