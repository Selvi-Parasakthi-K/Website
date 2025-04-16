import { FC, useState } from "react";
import "./Header.scss";
import Logo from "../../assets/coverBrewardslogo.svg";
import ProfileIcon from "../../assets/landing/profile-circle-dark.svg";
import LoginLogo from "../../assets/profile-circle.svg";
import SearchIcon from "../../assets/search-normal.svg";
import BellIcon from "../../assets/bell-svgrepo-com 1.svg";
import HamburgerIcon from "../../assets/landing/hamburger.svg";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Header w-full mx-auto py-4 md:py-7 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
      <div className="flex items-center justify-between w-full gap-8 max-w-[1800px] mx-auto">
        <div className="flex items-center gap-4 md:gap-6 lg:gap-12">
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src={HamburgerIcon} alt="Menu" width={24} height={24} />
          </button>

          <a className="w-[120px] md:w-[140px] lg:w-[160px]" href="#">
            <img className="w-full" src={Logo} alt="Company Logo" />
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              <li>
                <a
                  className="nav-link text-base lg:text-[16px] xl:text-[20px]"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link text-base lg:text-[16px] xl:text-[20px]"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="nav-link text-base lg:text-[16px] xl:text-[20px]"
                  href="#"
                >
                  Corporate Insurance
                </a>
              </li>
              <li>
                <a
                  className="nav-link text-base lg:text-[16px] xl:text-[20px]"
                  href="#"
                >
                  Individual Insurance
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="nav-search relative hidden md:block">
            <img
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              src={SearchIcon}
              alt="Search"
              width={18}
              height={18}
            />
            <input
              className="form-control pl-12 w-[240px] md:w-[280px] lg:w-[320px]"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="notification relative">
              <a href="#" className="relative block">
                <img
                  src={BellIcon}
                  alt="Notifications"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  2
                </span>
              </a>
            </div>

            <div className="flex items-center">
              <a href="#" className="md:hidden p-2">
                <img
                  src={ProfileIcon}
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <button
                type="button"
                className="hidden md:flex btn header-login-btn justify-center items-center gap-2 px-4"
              >
                <img src={LoginLogo} alt="" width={22} height={22} />
                <span>Login</span>
              </button>
            </div>

            <select className="select-lang bg-transparent border-none focus:ring-0 text-sm md:text-base">
              <option value="">EN/عربي</option>
              <option value="">English</option>
              <option value="">عربي</option>
            </select>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="pt-4 pb-6">
          <ul className="flex flex-col">
            <li>
              <a
                className="nav-link text-base block py-2"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link text-base block py-2"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="nav-link text-base block py-2"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                Corporate Insurance
              </a>
            </li>
            <li>
              <a
                className="nav-link text-base block py-2"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                Individual Insurance
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
