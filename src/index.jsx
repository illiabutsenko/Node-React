import ReactDOM from "react-dom/client";
import CounterOld from "./components/CounterOld";
import { Button, ButtonStyled, Button2 } from "./components/Button/Button";

function App() {
  return (
    <div>
      <CounterOld />
      <Button>Button</Button>
      <ButtonStyled primary>ButtonStyled</ButtonStyled><br></br><br></br>
      <Button2 dangerButton>Button2</Button2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
