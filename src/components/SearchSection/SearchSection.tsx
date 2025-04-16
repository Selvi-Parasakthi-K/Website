import { FC } from "react";
import "./SearchSection.scss";
import Redeem from "../../assets/reward-dashboard/redeem.svg";
import Vouchers from "../../assets/reward-dashboard/vouncher.svg";
import Vip from "../../assets/reward-dashboard/vip.svg";
import Reward from "../../assets/reward-dashboard/reward.svg";
import Filter from "../../assets/reward-dashboard/filtericon.svg";

interface SearchSectionProps {}

const SearchSection: FC<SearchSectionProps> = () => {
  const searchItems = [
    { image: Redeem, text: "Redeem", redirectUrl: "#" },
    {
      image: Vouchers,
      text: "Vouchers",
      redirectUrl: "/Rewards-Main-Dahboard",
    },
    { image: Vip, text: "VIP Rewards", redirectUrl: "#" },
    {
      image: Reward,
      text: "Rewards history",
      redirectUrl: "/rewards-points-table",
    },
  ];
  return (
    <div
      className="SearchSection bg-white mx-8 my-3 py-4 rounded-lg flex justify-between items-center px-4"
      data-testid="SearchSection"
    >
      <div className="flex flex-row gap-4 ">
        {searchItems.map((item, index) => (
          <a
            className="search-item flex flex-row bg-[#F7F7F7] rounded-3xl p-3 gap-2 cursor-pointer"
            key={index}
            href={item.redirectUrl}
          >
            <img src={item.image} alt="" />
            <h4 className="text-[#546680] font-medium">{item.text}</h4>
          </a>
        ))}
      </div>
      <div className="searchbar-sec flex flex-row items-center gap-3">
        <div className="searchbar flex py-2 px-3 items-center gap-2 rounded-[20px] border border-[#ECEEF1]">
          <input type="text" placeholder="Search here..." />
          <img src={Filter} alt="" />
        </div>
        <div className="dropdown flex py-2 px-3 items-center gap-2 rounded-[20px] border border-[#ECEEF1]">
          <select name="" id="" className="LanguageOption">
            <option hidden value="">
              This month
            </option>
            <option value="">Jan</option>
            <option value="">Feb</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
