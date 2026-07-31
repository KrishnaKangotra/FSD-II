import "./App.css";

import Header from "./components/Header";
import PostEditor from "./components/PostEditor";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container">
      <Header />
      <PostEditor />
      <PostList />
    </div>
  );
}

export default App;