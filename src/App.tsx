import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VotePage from "./pages/VotePage";
import ScoresPage from "./pages/ScoresPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <Link to="/">Voter</Link>
        <Link to="/scores">Classement</Link>
      </nav>
      <Routes>
        <Route path="/" element={<VotePage />} />
        <Route path="/scores" element={<ScoresPage />} />
      </Routes>
    </Router>
  );
};

export default App;
