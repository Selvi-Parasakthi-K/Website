import { FC } from "react";
import "./Benefits.scss";

interface BenefitsProps {}

const Benefits: FC<BenefitsProps> = () => (
  <div
    className="Benefits w-full mx-auto py-24 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32"
    data-testid="Benefits"
  >
    <div className="max-w-[1800px] w-[100%] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 xl:gap-32 items-center justify-between">
      <div className="benefits-text w-[50%] flex flex-col gap-6">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          Unlock Exclusive Benefits & Maximize Your Rewards with CoverB!
        </h2>
        <p className="text-lg text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="benefits-numbers flex gap-12 md:gap-16 lg:gap-20">
        <div className="benefits-number flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-[#FF7E36]">
            100+
          </h1>
          <p className="text-lg font-medium text-gray-700 mt-2">
            Users Getting Benefits
          </p>
        </div>
        <div className="benefits-number flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-[#9d65e5]">
            50+
          </h1>
          <p className="text-lg font-medium text-gray-700 mt-2">
            Users Getting Benefits
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Benefits;
