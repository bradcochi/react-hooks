import { useState } from "react";

function UseState() {
  const [inputName, setInputName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <h1>{inputName}</h1>
    </div>
  );
}

export default UseState;

// const [count, setCount] = useState(0);
// return (
//   <>
//     <div>{count}</div>
//     <button
//       onClick={() => {
//         setCount(count + 1);
//       }}
//     >
//       Increase Count
//     </button>
//   </>
// );
