import { FC } from "react";
import "./Partners.scss";
import Logo1 from "../../assets/landing/logo1.svg";
import Logo2 from "../../assets/landing/logo2.svg";
import Logo3 from "../../assets/landing/logo3.svg";
import Logo4 from "../../assets/landing/logo4.svg";
import Logo5 from "../../assets/landing/logo5.svg";

interface PartnersProps {}

const Partners: FC<PartnersProps> = () => (
  <div
    className="Partners w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32"
    data-testid="Partners"
  >
    <div className="max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 w-[100%] md:w-[30%] text-center md:text-left">
          Our Partners
        </h2>

        <div className="relative w-full">
          <div className="hidden md:block brand-logos-container">
            <div className="brand-logos">
              <div className="flex space-x-6 md:space-x-8 lg:space-x-10">
                <div className="flex-shrink-0 w-[120px] md:w-[140px] lg:w-[160px]">
                  <img
                    src={Logo1}
                    alt="Partner Logo 1"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-[120px] md:w-[140px] lg:w-[160px]">
                  <img
                    src={Logo2}
                    alt="Partner Logo 2"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-[120px] md:w-[140px] lg:w-[160px]">
                  <img
                    src={Logo3}
                    alt="Partner Logo 3"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-[120px] md:w-[140px] lg:w-[160px]">
                  <img
                    src={Logo4}
                    alt="Partner Logo 4"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-shrink-0 w-[120px] md:w-[140px] lg:w-[160px]">
                  <img
                    src={Logo5}
                    alt="Partner Logo 5"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 gap-6">
            <div className="flex justify-center">
              <img
                src={Logo1}
                alt="Partner Logo 1"
                className="w-[120px] h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={Logo2}
                alt="Partner Logo 2"
                className="w-[120px] h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={Logo3}
                alt="Partner Logo 3"
                className="w-[120px] h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={Logo4}
                alt="Partner Logo 4"
                className="w-[120px] h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={Logo5}
                alt="Partner Logo 5"
                className="w-[120px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Partners;
