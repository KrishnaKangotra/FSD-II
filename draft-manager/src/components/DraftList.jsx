import DraftItem from "./DraftItem";

function DraftList({ drafts, editDraft, deleteDraft }) {
  return (
    <div>
      <h2>Saved Drafts</h2>

      {drafts.length === 0 ? (
        <p>No drafts available.</p>
      ) : (
        drafts.map((draft) => (
          <DraftItem
            key={draft.id}
            draft={draft}
            editDraft={editDraft}
            deleteDraft={deleteDraft}
          />
        ))
      )}
    </div>
  );
}

export default DraftList;