import ReactDOM from "react-dom/client";
import Joke from "./components/Joke";
import Describe from "./components/Describe";

function App() {
  return (
    <div>
      <Joke />
      <Describe />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
