import ReactDOM from "react-dom/client";
import UserInput from "./components/UserInput";

function App() {
  return (
    <div>
      <UserInput />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
