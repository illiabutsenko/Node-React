import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import Color from "./components/Color";
import TemperatureConverter from "./components/TemperatureConverter";

function Welcome(props) {
  return <h1>¡Hola, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Illia" />
      <Color />
      <Counter />
      <TemperatureConverter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
