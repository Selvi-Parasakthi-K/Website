import { FC } from "react";
import "./Benefits.scss";

interface BenefitsProps {}

const Benefits: FC<BenefitsProps> = () => (
  <div
    className="Benefits w-full mx-auto md:py-24 py-16 px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32"
    data-testid="Benefits"
  >
    <div className="max-w-[1800px] w-[100%] mx-auto flex flex-col lg:flex-row md:gap-12 lg:gap-24 xl:gap-32 items-center justify-between">
      <div className="benefits-text md:w-[50%] w-[80%] flex flex-col md:gap-6 gap-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          Unlock Exclusive Benefits & Maximize Your Rewards with CoverB!
        </h2>
        <p className="md:text-lg text-[#616888] text-sm mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="benefits-numbers flex gap-4 md:gap-12 lg:gap-20">
        <div className="benefits-number flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl lg:text-7xl md:font-bold font-semibold text-[#FF7E36]">
            100+
          </h1>
          <p className="md:text-lg text-sm font-medium text-[#616888] mt-2 w-[70%] md:w-[100%] text-left mr-3">
            Users Getting Benefits
          </p>
        </div>
        <div className="benefits-number flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl lg:text-7xl md:font-bold font-semibold text-[#9d65e5]">
            50+
          </h1>
          <p className="md:text-lg text-sm font-medium text-[#616888] mt-2 w-[70%] md:w-[100%] text-left">
            Users Getting Benefits
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Benefits;
