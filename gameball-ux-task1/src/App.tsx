import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideMenu from "./components/SideMenu/SideMenu";
import GamePlan from "./pages/GamePlan/GamePlan";
import Dashboard from "./pages/Dashboard/Dashboard";
import Levels from "./pages/Levels/Levels";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const pathname = window.location.pathname;

  const [page, setPage] = useState<string>(pathname.slice(1));

  return (
    <Router>
      <NavBar page={page} />
      <SideMenu setPage={setPage} page={page} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gameplan" element={<GamePlan />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/levels" element={<Levels />} />
      </Routes>
    </Router>
  );
}

export default App;
