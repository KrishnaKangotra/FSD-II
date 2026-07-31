import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import DraftEditor from "./components/DraftEditor";
import DraftList from "./components/DraftList";
import ActionButtons from "./components/ActionButtons";

function App() {
  const [post, setPost] = useState("");
  const [drafts, setDrafts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Save Draft
  const saveDraft = () => {
    if (post.trim() === "") {
      alert("Please write something first.");
      return;
    }

    if (editingId !== null) {
      const updatedDrafts = drafts.map((draft) =>
        draft.id === editingId ? { ...draft, text: post } : draft
      );

      setDrafts(updatedDrafts);
      setEditingId(null);
    } else {
      const newDraft = {
        id: Date.now(),
        text: post,
      };

      setDrafts([...drafts, newDraft]);
    }

    setPost("");
  };

  // Edit Draft
  const editDraft = (id) => {
    const draft = drafts.find((draft) => draft.id === id);

    if (draft) {
      setPost(draft.text);
      setEditingId(id);
    }
  };

  // Delete Draft
  const deleteDraft = (id) => {
    const updatedDrafts = drafts.filter((draft) => draft.id !== id);
    setDrafts(updatedDrafts);
  };

  // Clear Textarea
  const clearPost = () => {
    setPost("");
    setEditingId(null);
  };

  return (
    <div className="container">
      <Header />

      <DraftEditor post={post} setPost={setPost} />

      <ActionButtons
        saveDraft={saveDraft}
        clearPost={clearPost}
      />

      <DraftList
        drafts={drafts}
        editDraft={editDraft}
        deleteDraft={deleteDraft}
      />
    </div>
  );
}

export default App;