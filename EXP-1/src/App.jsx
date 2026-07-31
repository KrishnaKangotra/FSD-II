import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import PostEditor from "./components/PostEditor";
import CharacterStatus from "./components/CharacterStatus";
import MediaUpload from "./components/MediaUpload";
import PublishButton from "./components/PublishButton";

function App() {
  const [post, setPost] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("X");

  const platformLimits = {
    X: 280,
    Instagram: 2200,
    LinkedIn: 3000,
    Facebook: 63206,
  };

  return (
    <div className="app">
      <Header />

      <PlatformSelector
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />

      <PostEditor
        post={post}
        setPost={setPost}
      />

      <CharacterStatus
        post={post}
        limit={platformLimits[selectedPlatform]}
        platform={selectedPlatform}
      />

      <MediaUpload />

      <PublishButton
        post={post}
        limit={platformLimits[selectedPlatform]}
        platform={selectedPlatform}
      />
    </div>
  );
}

export default App;