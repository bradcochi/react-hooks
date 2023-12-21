import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() =>
    // The code that we want to run

    // Optional return function
    {}, []); // The dependancy array

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
