import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RewardsDashboard from "./pages/RewardsDashboard/RewardsDashboard";
import RewardsPointsTable from "./pages/RewardsPointsTable/RewardsPointsTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Rewards-Main-Dahboard" element={<RewardsDashboard />} />
        <Route path="/rewards-points-table" element={<RewardsPointsTable />} />
      </Routes>
    </Router>
  );
}

export default App;
