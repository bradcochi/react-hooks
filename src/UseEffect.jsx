import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState();

  return (
    <div>
      <h3>Count: {count}</h3>
      <button>Decrement</button>
      <button>Increment</button>
    </div>
  );
}

export default UseEffect;
