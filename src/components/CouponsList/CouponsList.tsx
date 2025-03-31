import { FC } from "react";
import "./CouponsList.scss";
import CouponImage from "../../assets/reward-dashboard/cardimage.png";
import RedeemCoin from "../../assets/reward-dashboard/referrelcoin.svg";

interface CouponsListProps {}

const CouponsList: FC<CouponsListProps> = () => {
  const coupons = [
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      description: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      description: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      description: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      description: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      description: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      description: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      description: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      description: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      description: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
    },
  ];

  return (
    <div
      className="CouponsList mx-4 my-3 py-4 rounded-lg px-4"
      data-testid="CouponsList"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon, index) => (
          <div
            className="coupon-card bg-white rounded-lg shadow-sm overflow-hidden"
            key={index}
          >
            <div className="coupon-image px-4 pt-4">
              <img
                src={coupon.image}
                alt="Coupon"
                className="w-full h-52 object-cover rounded-xl"
              />
            </div>
            <div className="px-6 py-6 flex flex-col gap-2">
              <span className="coupon-label flex py-1 px-2 gap-2 rounded-lg text-[#365B9C] text-xs font-bold w-16">
                {coupon.label}
              </span>
              <h3 className="coupon-title text-[#223A74] text-base font-bold mt-3">
                {coupon.title}
              </h3>
              <p className="coupon-description text-[#546680] text-sm font-normal my-3">
                {coupon.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="coupon-coin-content flex items-center gap-2">
                  <div className="flex items-center justify-center h-14 w-14 overflow-hidden">
                    <img
                      src={RedeemCoin}
                      alt="Coin"
                      className="h-full w-auto max-w-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="coupon-coins text-[#223A74] text-xl font-bold">
                      {coupon.points}
                    </span>
                    <span className="coupon-bonus text-[#546680] text-sm font-medium">
                      {coupon.bonus}
                    </span>
                  </div>
                </div>
                <button className="redeem-button flex items-center py-2 px-3 rounded-[20px] border border-[#EDA22E] font-semibold text-sm">
                  Redeem Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponsList;
