function DraftItem({ draft, editDraft, deleteDraft }) {
  return (
    <div className="draft-card">
      <p>{draft.text}</p>

      <button onClick={() => editDraft(draft.id)}>Edit</button>

      <button onClick={() => deleteDraft(draft.id)}>Delete</button>
    </div>
  );
}

export default DraftItem;