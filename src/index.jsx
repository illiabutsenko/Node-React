import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
