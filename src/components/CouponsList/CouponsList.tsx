import { FC, useState } from "react";
import "./CouponsList.scss";
import CouponImage from "../../assets/reward-dashboard/cardimage.png";
import RedeemCoin from "../../assets/reward-dashboard/referrelcoin.svg";
import CloseIcon from "../../assets/reward-dashboard/cross.svg";

interface CouponsListProps {}

const CouponsList: FC<CouponsListProps> = () => {
  const [selectedCoupon, setSelectedCoupon] = useState<any>(null);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const coupons = [
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      terms: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      terms: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      terms: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      terms: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      terms: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      terms: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      terms: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      terms: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: CouponImage,
      label: "Trending",
      title: "Welcome to Rewards Paradise!",
      terms: "Your journey to exclusive perks starts now.",
      points: "10,000",
      bonus: "BONUS POINTS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  const handleRedeem = (coupon: any) => {
    setSelectedCoupon(coupon);
    setIsCardOpen(true);
  };

  const handleClose = () => {
    setIsCardOpen(false);
  };

  return (
    <div className="relative">
      {isCardOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClose}
        ></div>
      )}

      <div
        className={`fixed top-24 right-0 h-[calc(100vh-7rem)] w-1/2 bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out rounded-2xl mr-4 overflow-hidden ${
          isCardOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedCoupon && (
          <div className="relative h-full overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute -left-10 top-4 p-2 bg-white rounded-full shadow-md z-50"
            >
              <img src={CloseIcon} alt="Close" className="w-5 h-5" />
            </button>
            <div className="coupon-card h-full">
              <div className="coupon-image px-4 pt-4">
                <img
                  src={selectedCoupon.image}
                  alt="Coupon"
                  className="w-full h-[25%] object-cover rounded-xl"
                />
              </div>
              <div className="px-6 pt-6 flex flex-col gap-2">
                <span className="coupon-label flex py-1 px-2 gap-2 rounded-lg text-[#365B9C] text-xs font-bold w-16">
                  {selectedCoupon.label}
                </span>
                <h3 className="coupon-title text-[#223A74] text-base font-bold mt-3">
                  {selectedCoupon.title}
                </h3>
                <p className="coupon-description text-[#546680] text-sm font-normal my-3">
                  {selectedCoupon.terms}
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
                        {selectedCoupon.points}
                      </span>
                      <span className="coupon-bonus text-[#546680] text-sm font-medium">
                        {selectedCoupon.bonus}
                      </span>
                    </div>
                  </div>
                  <button className="redeem-btn text-white px-6 py-2 rounded-[20px] font-medium text-sm">
                    Redeem Now
                  </button>
                </div>
              </div>
              <div className="px-6 pb-6 ">
                <p>Description</p>
                <p>{selectedCoupon.description}</p>
                <div className="flex flex-row justify-end gap-4 mt-4">
                  <button className="cancelbtn flex items-center px-6 py-2 rounded-[20px] ">
                    Cancel
                  </button>
                  <button className="redeem-btn text-white px-6 py-2 rounded-[20px] font-medium text-sm">
                    Redeem Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

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
                  {coupon.terms}
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
                  <button
                    onClick={() => handleRedeem(coupon)}
                    className="redeem-button flex items-center py-2 px-3 rounded-[20px] border border-[#EDA22E] font-semibold text-sm hover:bg-[#EDA22E] hover:text-white transition-colors"
                  >
                    Redeem Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponsList;
