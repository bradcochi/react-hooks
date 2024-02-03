import { useState } from "react";
import { initialItems } from "./utils";

interface DemoProps {}

function useMemoDemo() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = items.find((item) => item.isSelected);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Items: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default useMemoDemo;
