import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RewardsDashboard from "./pages/RewardsDashboard/RewardsDashboard";

function App() {
  return (
    // <div>
    //   <Header />
    //   <HomeSlider />
    //   <Partners />
    //   <Benefits />
    //   <RewardsProgram />
    //   <EarningSteps />
    //   <EnjoyRewards />
    //   <FAQ />
    //   <Footer />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Rewards-Main-Dahboard" element={<RewardsDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
