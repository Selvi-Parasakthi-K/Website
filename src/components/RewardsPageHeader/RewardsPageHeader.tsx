import { FC } from "react";
import "./RewardsPageHeader.scss";
import Logo from "../../assets/coverBrewardslogo.svg";
import BellIcon from "../../assets/bell-svgrepo-com 1.svg";
import UserAvatar from "../../assets/reward-dashboard/user-avatar.svg";
import ArrowDown from "../../assets/reward-dashboard/arrow-down.svg";

interface RewardsPageHeaderProps {}

const RewardsPageHeader: FC<RewardsPageHeaderProps> = () => (
  <>
    {/* Spacer with same height as header to prevent content overlap */}
    <div className="header-spacer h-[76px]"></div>

    <div
      className="RewardsPageHeader fixed top-3 left-0 right-0 z-50 bg-white flex items-center justify-between p-3 px-8 mx-auto w-[calc(100%-58px)] rounded-[40px]"
      data-testid="RewardsPageHeader"
    >
      <div>
        <img src={Logo} alt="CoverB Rewards" className="h-10" />
      </div>
      <div>
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-black hover:text-primary font-medium">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-primary font-medium">
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img src={BellIcon} alt="Notifications" className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            2
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <img
              src={UserAvatar}
              alt="User"
              className="h-10 w-10 rounded-full"
            />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs font-bold text-white px-1 rounded">
              VIP
            </span>
          </div>
          <span className="text-sm font-medium hidden sm:inline">
            Sultan Rafi
          </span>
          <img src={ArrowDown} alt="Dropdown" className="h-4 w-4" />
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium">EN/عربي</span>
          <img src={ArrowDown} alt="Language" className="h-4 w-4" />
        </div>
      </div>
    </div>
  </>
);

export default RewardsPageHeader;
