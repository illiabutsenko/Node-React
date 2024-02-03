import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import CounterOld from "./components/CounterOld";
import Posts from "./components/Posts";
import Recipes from "./components/Recipes";
import Switch from "react-switch";
import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else document.body.classList.remove("dark");
  }, [isDark]);
  return (
    <div className="container mx-auto px-4 dark:bg-gray-900 dark:text-white">
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
              <Link className="hover:underline" to="/Recipes">
                Recipes
              </Link>
            </li>
            <li>
              <Switch
                uncheckedIcon="🌙"
                checkedIcon="☀️"
                width={46}
                height={24}
                checked={isDark}
                onChange={(toggle) => setIsDark(toggle)}
              />
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/counter" element={<CounterOld />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/Recipes" element={<Recipes />} />
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
