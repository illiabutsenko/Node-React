import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countDecrement, setCountDecrement] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCountDecrement(countDecrement - 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Increment</button>
      <p>You clicked {countDecrement} times</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
