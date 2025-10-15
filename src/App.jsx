import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RepoDetails from "./pages/RepoDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo/:repoName" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
