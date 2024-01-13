import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import WelcomeComponent from "./components/WelcomeComponent";
import ErrorComponent from "./components/ErrorComponent";
import UserProfile from "./components/UserProfile";
import ProductList from "./components/ProductList";
import TaskList from "./components/TaskList";

const products = [
  { id: 1, name: "Apple", price: 0.99 },
  { id: 2, name: "Banana", price: 0.79 },
  { id: 3, name: "Carrot", price: 0.49 },
  { id: 4, name: "Date", price: 1.29 },
];

const tasks = [
  { id: 1, title: "codding", complited: "+" },
  { id: 1, title: "running", complited: "-" },
  { id: 1, title: "eating", complited: "+" },
  { id: 1, title: "sleeping", complited: "-" },
];

function App() {
  return (
    <div>
      <ProductList products={products} />
      <TaskList tasks={tasks} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
