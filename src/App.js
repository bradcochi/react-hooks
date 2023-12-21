import { Routes, Route } from "react-router-dom";
import UseState from "./UseState";
import UseEffect from "./UseEffect";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
