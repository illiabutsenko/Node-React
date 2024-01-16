import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Joke from "./components/Joke";
import Posts from "./components/Posts";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/joke">Joke</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/toolbar">Toolbar</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/joke" element={<Joke />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/toolbar" element={<Toolbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
