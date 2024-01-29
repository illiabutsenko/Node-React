import ReactDOM from "react-dom/client";
import ButtonComponent from "./components/Button/Button";

function App() {
  return (
    <div>
      <ButtonComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
