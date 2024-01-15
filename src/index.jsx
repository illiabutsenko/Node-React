import ReactDOM from "react-dom/client";
import ModalContainer from "./components/ModalContainer";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div>
      <ModalContainer />
      <Recipes />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
