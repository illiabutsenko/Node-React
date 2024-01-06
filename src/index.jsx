import ReactDOM from "react-dom/client";

const name = "Illia";
const element = (
  <>
    <h1>Hello, {name}!</h1>
    <p>This is a fragment</p>
    <button type="button">button</button>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
