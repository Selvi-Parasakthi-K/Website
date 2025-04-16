import { FC } from "react";
import "./EnjoyRewards.scss";
import HandShake from "../../assets/landing/join-r-handsake.svg";
import Gift from "../../assets/landing/join-r-gift.svg";
import GiftBox from "../../assets/landing/join-r-giftbox.svg";
import Refer from "../../assets/landing/refer-and-earn-application.svg";

interface EnjoyRewardsProps {}

const EnjoyRewards: FC<EnjoyRewardsProps> = () => (
  <div
    className="w-full mx-auto md:py-16 md:px-4 px-8 sm:px-6 lg:px-8 xl:px-12 2xl:px-20"
    data-testid="RewardsProgram"
  >
    <div className="flex gap-14 items-center md:flex-row flex-col-reverse">
      <div>
        <div className="rewards-header mb-12 max-w-2xl">
          <h1 className="md:text-3xl text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">
            Join, Earn, Redeem – Enjoy Exclusive Rewards Effortlessly!
          </h1>
          <p className="text-lg text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <div className="flex items-start gap-7 my-10">
            <img src={HandShake} alt="HandShake" />
            <div>
              <div className="md:text-2xl text-xl font-bold">How to Join</div>
              <div className="text-gray-600">
                Sign up effortlessly and start earning points every time you use
                CoverB Ride or Food. No extra steps—just ride, order, and
                collect rewards!
              </div>
            </div>
          </div>
          <div className="flex items-start gap-7 my-10">
            <img src={Gift} alt="Gift" />
            <div>
              <div className="md:text-2xl text-xl font-bold">How to Earn</div>
              <div className="text-gray-600">
                Sign up effortlessly and start earning points every time you use
                CoverB Ride or Food. No extra steps—just ride, order, and
                collect rewards!
              </div>
            </div>
          </div>
          <div className="flex items-start gap-7 my-10">
            <img src={GiftBox} alt="GiftBox" />
            <div>
              <div className="md:text-2xl text-xl font-bold">How to Redeem</div>
              <div className="text-gray-600">
                Use your earned points to unlock exciting deals and discounts.
                Simply browse available offers and redeem your points for
                exclusive benefits!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={Refer} alt="Refer" />
      </div>
    </div>
    <div className="card bg-[#223A74] flex flex-col md:flex-row justify-between text-white items-center md:p-8 p-4 rounded-2xl">
      <div>
        <div className="text-2xl font-bold my-2">
          Ride, Earn, Redeem - Start Enjoying Rewards Today!
        </div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <div className="flex justify-start items-start w-full md:w-auto mt-4 md:mt-0">
        <button type="button" className="btn login-btn px-4">
          Refer & Earn
        </button>
      </div>
    </div>
  </div>
);

export default EnjoyRewards;
