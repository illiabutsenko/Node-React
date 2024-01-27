import ReactDOM from "react-dom/client";
import State from "./components/State";

function App() {
  return (
    <div>
      <State />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
