import ReactDOM from "react-dom/client";
import WelcomeComponent from "./components/WelcomeComponent";
import ErrorComponent from "./components/ErrorComponent";
import UserProfile from "./components/UserProfile";

const user = {
  isLoggedIn: true,
  name: "Danny",
};

const error = {
  message: "Something went wrong",
};

function App() {
  return (
    <div>
      <WelcomeComponent user={user} />
      <ErrorComponent error={error} />
      <UserProfile user={user} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
