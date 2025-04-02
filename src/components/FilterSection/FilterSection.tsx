import { FC } from "react";
import "./FilterSection.scss";
import FilterIcon from "../../assets/reward-dashboard/dropdown-filter-icon.svg";

interface FilterSectionProps {}

const FilterSection: FC<FilterSectionProps> = () => {
  const filterItems = [
    "Ramadan",
    "All Categories",
    "Yet to Expire",
    "Dining",
    "Suggested for you",
  ];
  return (
    <div
      className="FilterSection bg-white mx-8 my-3 pb-4 pt-[0.2rem] rounded-lg px-4 mt-3"
      data-testid="FilterSection"
    >
      <p className="text-[#546680] text-sm font-normal">Filters</p>
      <div className="filter-button-outer flex flex-row gap-4">
        <div className="filter-buttons flex flex-row gap-4">
          {filterItems.map((item, index) => (
            <button
              key={index}
              className="filter-button flex justify-center items-center border-none bg-[#F0F8FF] px-3 py-2 rounded-lg gap-2 text-[#546680]"
            >
              <span>{item}</span>
            </button>
          ))}
        </div>
        <button className="filter-button-sort flex justify-center items-center border-none bg-[#F0F8FF] px-3 py-2 rounded-lg gap-2 text-[#546680]">
          <span>Sort </span> <img src={FilterIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
