import useFetch from "../hooks/useFetch";

function Joke() {
  const { data, loading, error } = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p>Joke: {data.value}</p>
    </div>
  );
}

export default Joke;
