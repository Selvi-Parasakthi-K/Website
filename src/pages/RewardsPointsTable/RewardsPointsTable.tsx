import { FC } from "react";
import "./RewardsPointsTable.scss";
import RewardsPageHeader from "../../components/RewardsPageHeader/RewardsPageHeader";
import LevelsSection from "../../components/LevelsSection/LevelsSection";
import SearchSection from "../../components/SearchSection/SearchSection";
import FilterSection from "../../components/FilterSection/FilterSection";
import PointsTable from "../../components/PointsTable/PointsTable";

interface RewardsPointsTableProps {}

const RewardsPointsTable: FC<RewardsPointsTableProps> = () => (
  <div
    className="RewardsPointsTable bg-[#f7f7f7] min-h-screen"
    data-testid="RewardsPointsTable"
  >
    <RewardsPageHeader />
    <LevelsSection />
    <SearchSection />
    <FilterSection />
    <PointsTable />
  </div>
);

export default RewardsPointsTable;
