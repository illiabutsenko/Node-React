import { useReducer } from "react";

const initialState = 0;

function Counter() {
  function counterReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> - </button>
      <span> {state} </span>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Counter;
