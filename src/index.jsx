import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import CounterOld from "./components/CounterOld";
import Posts from "./components/Posts";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="container mx-auto px-4">
      <BrowserRouter>
        <nav className="bg-gray-800 rounded-lg p-4">
          <ul className="text-white flex flex-wrap justify-center space-x-4">
            <li>
              <Link className="hover:underline" to="/counter">
                Counter
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/posts">
                Posts
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/toolbar">
                Toolbar
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/counter" element={<CounterOld />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/toolbar" element={<Toolbar />} />
        </Routes>
        <h1 class="bg-indigo-300 flex justify-center">Header</h1>
        <p className="bg-green-300 text-sky">Paragraph</p>
        <button className="bg-orange-300 hover:bg-sky-700 float-end rounded-lg p-4">
          Button
        </button>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
