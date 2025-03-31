import { FC } from "react";
import "./RewardsProgram.scss";
import Buy from "../../assets/landing/buy.svg";
import Earn from "../../assets/landing/earn.svg";
import Reward from "../../assets/landing/reward.svg";
import Line1 from "../../assets/landing/Line 1.svg";
import Line2 from "../../assets/landing/Line 2.svg";

interface RewardsProgramProps {}

const RewardsProgram: FC<RewardsProgramProps> = () => (
  <div
    className="RewardsProgram w-full mx-auto py-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20"
    data-testid="RewardsProgram"
  >
    <div className="max-w-[1800px] mx-auto flex flex-col items-center px-24">
      <div className="rewards-header text-center mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          CoverB Rewards Program
        </h1>
        <p className="text-lg text-gray-600">Unlock Exclusive Benefits</p>
      </div>

      <div className="rewards-steps flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8 xl:gap-12 w-full">
        <div className="flex flex-col items-center text-center max-w-[240px]">
          <img src={Buy} alt="Buy" className="mb-6" />
          <div className="step-content">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Buy</h2>
            <p className="text-gray-600">
              Make a purchase and start collecting reward points.
            </p>
          </div>
        </div>

        <div className="divider hidden md:flex items-center justify-center h-full">
          <img
            src={Line1}
            alt=""
            className="h-1 md:h-auto md:w-24 lg:w-96 -mt-32"
          />
        </div>

        <div className="flex flex-col items-center text-center max-w-[240px]">
          <img src={Earn} alt="Earn" className="mb-6" />
          <div className="step-content">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Earn</h2>
            <p className="text-gray-600">
              Make a purchase and start collecting reward points.
            </p>
          </div>
        </div>

        <div className="divider hidden md:flex items-center justify-center h-full">
          <img
            src={Line2}
            alt=""
            className="h-1 md:h-auto md:w-24 lg:w-96 -mt-32"
          />
        </div>

        <div className="flex flex-col items-center text-center max-w-[240px]">
          <img src={Reward} alt="Reward" className="mb-6" />
          <div className="step-content">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Reward</h2>
            <p className="text-gray-600">
              Make a purchase and start collecting reward points.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RewardsProgram;
