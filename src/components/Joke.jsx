import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import UserContext from "../context/user";

function Joke() {
  const user = useContext(UserContext);
  const { data, loading, error } = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>Hi, {user.name}</p>
      <p>Joke: {data.value}</p>
    </div>
  );
}

export default Joke;
