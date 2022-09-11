import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home.js";
import SinglePost from "./Component/SinglePost.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:postId" element={<SinglePost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
