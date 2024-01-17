import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Joke from "./components/Joke";
import Posts from "./components/Posts";
import Toolbar from "./components/Toolbar";
import UserContext from "./context/user";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import WelcomeComponent from "./components/WelcomeComponent";

function App() {
  const [user, setUser] = useState({
    isLoggedIn: true,
    name: "Guest",
    email: "guest@example.com",
    preferences: {
      theme: "light",
      language: "en",
    },
  });
  return (
    <div>
      <UserContext.Provider value={user}>
        <WelcomeComponent user={user} />
        <UserProfile user={user} />
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
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
