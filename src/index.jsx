import ReactDOM from "react-dom/client";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button>Натисніть мене</Button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
