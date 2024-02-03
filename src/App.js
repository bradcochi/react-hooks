import { Routes, Route } from "react-router-dom";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<UseState />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/usereducer" element={<UseReducer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
