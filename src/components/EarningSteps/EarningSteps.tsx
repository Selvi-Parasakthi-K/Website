import React, { FC } from "react";
import "./EarningSteps.scss";
import ShopingReward from "../../assets/landing/shopping-reward.svg";
import LimitedOffer from "../../assets/landing/limited-offer.svg";
import Businessman from "../../assets/landing/successful-businessman.svg";
interface EarningStepsProps {}

const EarningSteps: FC<EarningStepsProps> = () => (
  <div
    className="EarningSteps w-full mx-auto py-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20"
    data-testid="RewardsProgram"
  >
    <div className=" mx-auto flex flex-col items-center px-24">
      <div className="rewards-header text-center mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Simple Steps to Earn & Redeem Your<span>CoverB Rewards!</span>
        </h1>
      </div>

      <div className="rewards-steps flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 lg:gap-8 xl:gap-12 w-full">
        <div className="flex flex-col items-center text-center ">
          <img src={ShopingReward} alt="Buy" className="mb-6" />
          <div className="step-content">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Get Rewarded for Spending
            </h2>
            <p className="text-gray-600">
              Earn 1 point for every 10 Taka spent on Pathao Ride or Food. The
              more you spend, the more you earn!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img src={LimitedOffer} alt="Earn" className="mb-6" />
          <div className="step-content">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Redeem Exclusive Offers
            </h2>
            <p className="text-gray-600">
              Use your collected points to unlock exciting deals and special
              discounts of your choice.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center ">
          <img src={Businessman} alt="Reward" className="mb-6" />
          <div className="step-content">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Level Up for More Perks
            </h2>
            <p className="text-gray-600">
              As you accumulate more points, you reach higher tiers with greater
              rewards and exclusive privileges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EarningSteps;
