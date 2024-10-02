import { useState } from "react";
import NewJokes from "../Components/newJokes";

const Jokes = () => {
  const [state, setState] = useState(null);

  async function fetchApi() {
    setState("");
    const api = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
    const data = await fetch(api);
    const response = await data.json();
    setState(response?.joke);
  }
  console.log(state);

  return (
    <div>
      <NewJokes state={state} fun={fetchApi} />
    </div>
  );
};

export default Jokes;
