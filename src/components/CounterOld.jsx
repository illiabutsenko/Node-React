import { useState } from "react";
import { Button } from "./Button/Button";

function Counter() {
  const [count, setCount] = useState(0);
  const [decrementCount, setDecrementCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setDecrementCount(decrementCount - 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button primary onClick={increment}>Click Me</Button>

      <p>You clicked {decrementCount} times</p>
      <Button onClick={decrement}>Click Me</Button>
    </div>
  );
}

export default Counter;
