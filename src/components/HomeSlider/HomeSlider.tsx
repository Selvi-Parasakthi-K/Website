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
          <div className="slide-content">
            <div className="text-content">
              <h2>
                Earn more points with<br /> <span className="highlight">CoverB</span><span className="highlight"> Rewards</span>
                <br /> and maximize your benefits!
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button className="start-btn">Start Now →</button>
            </div>
            <div className="image-content">
              <img src={Line1} alt="Gift Box with Coins" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="text-content">
              <h2>
                Earn more points with<br /> <span className="highlight">CoverB</span><span className="highlight"> Rewards</span>
                <br /> and maximize your benefits!
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button className="start-btn">Start Now →</button>
            </div>
            <div className="image-content">
              <img src={Line1} alt="Gift Box with Coins" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="text-content">
              <h2>
                Earn more points with<br /> <span className="highlight">CoverB</span><span className="highlight"> Rewards</span>
                <br /> and maximize your benefits!
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button className="start-btn">Start Now →</button>
            </div>
            <div className="image-content">
              <img src={Line1} alt="Gift Box with Coins" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
