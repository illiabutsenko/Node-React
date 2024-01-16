import ReactDOM from "react-dom/client";
import ThemeContext from "./context/theme";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
