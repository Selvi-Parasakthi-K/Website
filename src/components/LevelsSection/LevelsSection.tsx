import { FC } from "react";
import "./LevelsSection.scss";
import BorderSvg from "../../assets/reward-dashboard/border.svg";
import ReferralCoin from "../../assets/reward-dashboard/referrelcoin.svg";
import CopyIcon from "../../assets/reward-dashboard/copy-icon.svg";
import Badge1 from "../../assets/reward-dashboard/badge1.svg";
import Badge2 from "../../assets/reward-dashboard/badge2.svg";
import Badge3 from "../../assets/reward-dashboard/badge3.svg";

interface LevelsSectionProps {}

const LevelsSection: FC<LevelsSectionProps> = () => {
  const levelsBadges = [
    {
      image: Badge1,
      points: 10000,
    },
    {
      image: Badge2,
      points: 10000,
    },
    {
      image: Badge3,
      points: 10000,
    },
    {
      image: Badge3,
      points: 10000,
    },
    {
      image: Badge3,
      points: 10000,
    },
    {
      image: Badge3,
      points: 10000,
    },
  ];

  return (
    <div
      className="LevelsSection pt-4 px-4 sm:px-6 lg:px-8"
      data-testid="LevelsSection"
    >
      <section className="level-section flex flex-row justify-between gap-8">
        <div className="level-tier-outer w-[calc(100%-434px)] flex flex-row gap-3 px-6 flex-1 items-center rounded-[20px] bg-white self-stretch">
          <div className="level-outer-left flex justify-between items-center gap-10">
            <div className="level-tier flex flex-col justify-between items-start w-[700px] h-[178px]">
              <div className="heading text-[#546680] text-base font-medium">
                <span>Level Tier</span>
              </div>
              <div className="level-cards flex flex-row justify-between gap-8 self-stretch">
                {levelsBadges.map((badge, index) => (
                  <div
                    className={`level${index + 1} coupons h-[142px] w-[140px]`}
                    key={index}
                  >
                    <div className="level-contianer flex flex-col items-center gap-[0.4rem]">
                      <div className="level-card flex flex-col justify-center items-center gap-2 pt-2 pr-7 pl-7">
                        <img
                          src={badge.image}
                          alt=""
                          className="h-[70px] w-[70px]"
                        />
                        <div className="level-coin-content flex items-center gap-2 self-stretch">
                          <img
                            src={ReferralCoin}
                            alt=""
                            className="w-6 h-6 shrink-0 aspect-square"
                          />
                          <div className="card-points flex flex-col items-start gap-1">
                            <span className="point-num text-[#223A74] text-sm font-medium">
                              {badge.points}
                            </span>
                            <span className="point-text text-[#54667F] text-[8px] font-semibold">
                              Points Earned
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="level-rank text-[#546680] text-[10px] font-semibold px-2">
                        LEVEL {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="divider py-10">
              <img src={BorderSvg} />
            </div>
            <div className="referral-card">
              <div className="referral-card-container flex flex-col gap-6 m-6">
                <span className="text-[#546680] text-base font-medium">
                  Share Referral code
                </span>
                <div className="referral-card-container-one flex flex-col items-center gap-3">
                  <h1 className="text-[#223A74] text-center text-sm font-medium">
                    Earn <br />
                    <span className="text-[#223A74] text-xl font-bold">
                      10000{" "}
                    </span>
                    Points
                  </h1>
                  <button className="flex py-2 px-2 items-center gap-2 rounded-2xl bg-[#E9F1FF] text-[#2C48EC] text-sm font-medium">
                    GKHLJGHG
                    <img src={CopyIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="platinum-card w-[394px] h-[232px]">
          <div className="pcard-num w-[135px] text-white text-base font-normal mt-7 mr-32 mb-16 ml-7">
            1234 **** 1596
          </div>
          <div className="pcards-points text-[#fff] text-2xl font-bold mr-60 mb-12 ml-20">
            90,000
          </div>
          <div className="pcard-details flex px-6 justify-between items-center self-stretch">
            <span className="text-[#223A74] text-center text-sm font-medium">
              Sultan Rafi
            </span>
            <span className="text-[#223A74] text-center text-sm font-medium">
              Exp 31/12/2025
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LevelsSection;
