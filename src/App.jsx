import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./Components/Login";
import Rules from "./Components/Rules";
import GameLanding from "./Components/GameLanding";
import Level1 from "./Components/Level1";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/game" element={<GameLanding />} />
          <Route path="/level1" element={<Level1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
