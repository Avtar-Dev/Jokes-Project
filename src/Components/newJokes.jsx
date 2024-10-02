import "../App.css";
const NewJokes = ({ state, fun }) => {
  const handler = () => {
    fun();
  };
  return (
    <div className="container">
      <div className="joke-div">
        <h1>Jokes</h1>
        <h2 className="h2-div">{state}</h2>
      </div>
      <button
        className="btn"
        onClick={handler}
        style={{ background: state == "" ? "red" : "aqua" }}
        disabled={state == ""}>
        New Joke
      </button>
    </div>
  );
};

export default NewJokes;
