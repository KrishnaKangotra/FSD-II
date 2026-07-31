import "./App.css";

import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import SearchBar from "./components/SearchBar";
import PostEditor from "./components/PostEditor";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container">
      <Header />

      <PlatformSelector />

      <SearchBar />

      <PostEditor />

      <PostList />
    </div>
  );
}

export default App;