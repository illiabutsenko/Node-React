import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";

function Joke() {
  const user = useContext(UserContext);
  const { data, loading, error } = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );

  if (loading) return <ClipLoader color="#00bfff" />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>Hi, {user.name}</p>
      <p>Joke: {data.value}</p>
    </div>
  );
}

export default Joke;
