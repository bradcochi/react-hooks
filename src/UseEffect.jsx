import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("The count is:", count);

    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
