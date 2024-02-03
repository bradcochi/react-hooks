import { useReducer } from "react";

// let State = {
//   count: number,
//   error: string | null,
// };

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer();

  return <div className="tutorial"></div>;
}
