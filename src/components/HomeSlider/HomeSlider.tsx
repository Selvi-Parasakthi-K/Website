import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import "./HomeSlider.css";
import Line1 from "../../assets/landing/gift.svg";

const HomeSlider: FC = () => {
  return (
    <div className="home-slider">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide-content md:pb-0 pb-6 pt-6 px-6">
            <div className="md:text-content w-[100%]">
              <h2 className="md:text-4xl text-xl">
                Earn more points with
                <br /> <span className="highlight">CoverB</span>
                <span className="highlight"> Rewards</span>
                <br /> and maximize your benefits!
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="start-btn px-3 py-2 md:text-lg text-base font-bold md:mt-3">
                Start Now →
              </button>
            </div>
            <div className="hidden justify-center items-center w-[50%] md:flex">
              <img src={Line1} alt="Gift Box with Coins" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content md:pb-0 pb-6 pt-6 px-6">
            <div className="md:text-content w-[100%]">
              <h2 className="md:text-4xl text-xl">
                Earn more points with
                <br /> <span className="highlight">CoverB</span>
                <span className="highlight"> Rewards</span>
                <br /> and maximize your benefits!
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="start-btn px-3 py-2 md:text-lg text-base font-bold md:mt-3">
                Start Now →
              </button>
            </div>
            <div className="hidden justify-center items-center w-[50%] md:flex">
              <img src={Line1} alt="Gift Box with Coins" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content md:pb-0 pb-6 pt-6 px-6">
            <div className="md:text-content w-[100%]">
              <h2 className="md:text-4xl text-xl">
                Earn more points with
                <br /> <span className="highlight">CoverB</span>
                <span className="highlight"> Rewards</span>
                <br /> and maximize your benefits!
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button className="start-btn px-3 py-2 md:text-lg text-base font-bold md:mt-3">
                Start Now →
              </button>
            </div>
            <div className="hidden justify-center items-center w-[50%] md:flex">
              <img src={Line1} alt="Gift Box with Coins" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
