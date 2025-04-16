import { FC, useEffect, useState } from "react";
import "./LevelsSection.scss";
import BorderSvg from "../../assets/reward-dashboard/border.svg";
import ReferralCoin from "../../assets/reward-dashboard/referrelcoin.svg";
import CopyIcon from "../../assets/reward-dashboard/copy-icon.svg";
import CoinImg from "../../assets/reward-dashboard/coin.png";
import { getWalletBalance } from "../../services/redeem.service";
import { IWallet } from "../../models/wallet";
import { getUserReferralCode } from "../../services/referral.service";
import {
  getPrivilegeStageLookup,
  getSasToken,
  getUserRewards,
} from "../../services/privilegeStage.service";
import { getUserScore } from "../../services/leaderboard.service";

interface LevelsSectionProps {}

const LevelsSection: FC<LevelsSectionProps> = () => {
  interface Badges {
    image: string;
    points: number;
    value: string;
    attained: boolean;
  }

  interface Score {
    rank: number;
    userName: string;
    score: number;
  }

  const applicationId = "666935365e88bddd252809ec";
  const userEmail = "selvi.as@theproindia.com";
  const userId = "67346c91e37f6b4eceda62a4";

  const [userBalance, setUserBalance] = useState<IWallet | null>(null);
  const [userScore, setUserScore] = useState<Score | null>(null);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [levelsBadges, setLevelsBadges] = useState<Badges[]>([]);
  const [sasToken, setSasToken] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getSasToken();
        setSasToken(token);
        const userRewards = await getUserRewards(applicationId, userEmail);
        const privilegeStageData = await getPrivilegeStageLookup(applicationId);
        const badges: Badges[] = userRewards.userRewards.Badges.map(
          (badge: any) => {
            const matchingStage = privilegeStageData.find(
              (stage: any) => stage.lookupValue._id === badge._id
            );
            return {
              image: badge.sourceImgUrl,
              points: matchingStage ? matchingStage.points : 0,
              value: badge.value,
              attained: badge.attained,
            };
          }
        );
        badges.sort((a, b) => a.points - b.points);
        console.log("Badges Data:", badges);
        setLevelsBadges(badges);
      } catch (error) {
        console.error("Error fetching badge data:", error);
      }

      try {
        const walletData = await getWalletBalance(applicationId, userEmail);
        setUserBalance(walletData);
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      }

      try {
        const userScore = await getUserScore(userEmail, applicationId);
        setUserScore(userScore);
      } catch (error) {
        console.error("Error fetching user points:", error);
      }

      try {
        const referralData = await getUserReferralCode(userId);
        setReferralCode(referralData.code);
      } catch (error) {
        console.error("Error fetching referral code:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Current User Balance:", userBalance);

  return (
    <div
      className="LevelsSection pt-4 px-4 sm:px-6 lg:px-8"
      data-testid="LevelsSection"
    >
      <section className="level-section flex flex-row justify-between gap-8">
        <div className="level-tier-outer w-[calc(100%-434px)] flex flex-row gap-3 px-6 flex-1 items-center rounded-[20px] bg-white self-stretch">
          <div className="level-outer-left flex justify-between items-center gap-10 w-full">
            <div className="level-tier flex flex-col justify-between items-start h-[178px]">
              <div className="heading text-[#546680] text-base font-medium">
                <span>Level Tier</span>
              </div>
              <div className="level-cards flex flex-row justify-between gap-8 self-stretch">
                {levelsBadges.map((badge, index) => (
                  <div
                    className={`level${
                      index + 1
                    } levels coupons h-[142px] w-[140px]`}
                    key={index}
                  >
                    <div className="level-contianer flex flex-col items-center gap-[0.4rem]">
                      <div className="level-card flex flex-col justify-center items-center gap-2 pt-2 pr-7 pl-7">
                        <img
                          src={`${badge.image}${sasToken}`}
                          alt=""
                          className="h-[70px] w-[70px]"
                        />
                        <div className="level-coin-content flex items-center gap-2 self-stretch">
                          <img
                            src={ReferralCoin}
                            alt=""
                            className="w-6 h-6 shrink-0 aspect-square"
                          />
                          <div className="card-points flex flex-col items-start">
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
            <div className="flex gap-8 justify-end items-center">
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
                      {referralCode?.toLocaleString()}
                      <img src={CopyIcon} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="platinum-card w-[394px] h-[232px] relative">
          <div className="pcard-num flex justify-end items-center mt-7 mr-7 mb-10 ml-7">
            <span className="text-[#223A74] text-base font-medium bg-[#fff9f6] px-4 rounded-full">
              VIP
            </span>
          </div>
          <div className="flex justify-between px-4">
            <div className="flex gap-2">
              <img src={CoinImg} alt="" className="h-14 w-auto" />
              <div className="flex flex-col">
                <p className="pt-0 py-0 text-white text-sm mt-0 mb-0">
                  Earned Coins
                </p>
                <p className="pcards-points text-[#fff] text-2xl font-bold mt-0 mb-0">
                  {userBalance?.balance[0].balance.toLocaleString() || "0"}
                </p>
              </div>
            </div>
            <div>
              <p className="pt-0 py-0 text-white text-sm mt-0 mb-0">
                Lifetime Points
              </p>
              <p className="pcards-points text-[#fff] text-2xl font-bold mt-0 mb-0">
                {userScore?.score || "0"}
              </p>
            </div>
          </div>
          <div className="pcard-details flex px-6 justify-between items-center self-stretch mt-12">
            <span className="text-[#223A74] text-center text-sm font-medium">
              {userScore?.userName || "User Name"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LevelsSection;
