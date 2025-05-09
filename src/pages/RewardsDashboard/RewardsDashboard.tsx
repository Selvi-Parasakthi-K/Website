import { FC } from "react";
import "./RewardsDashboard.scss";
import RewardsPageHeader from "../../components/RewardsPageHeader/RewardsPageHeader";
import LevelsSection from "../../components/LevelsSection/LevelsSection";
import SearchSection from "../../components/SearchSection/SearchSection";
import FilterSection from "../../components/FilterSection/FilterSection";
import CouponsList from "../../components/CouponsList/CouponsList";

interface RewardsDashboardProps {}

const RewardsDashboard: FC<RewardsDashboardProps> = () => (
  <div className="RewardsDashboard bg-[#f7f7f7]" data-testid="RewardsDashboard">
    <RewardsPageHeader />
    <LevelsSection />
    <SearchSection />
    <FilterSection />
    <CouponsList />
  </div>
);

export default RewardsDashboard;
