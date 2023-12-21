import { Routes, Route } from "react-router-dom";
import UseState from "./UseState";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/usestate" element={<UseState />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
