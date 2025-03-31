import { FC } from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Partners from "../../components/Partners/Partners";
import Benefits from "../../components/Benefits/Benefits";
import EarningSteps from "../../components/EarningSteps/EarningSteps";
import EnjoyRewards from "../../components/EnjoyRewards/EnjoyRewards";
import RewardsProgram from "../../components/RewardsProgram/RewardsProgram";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    <Header />
    <HomeSlider />
    <Partners />
    <Benefits />
    <RewardsProgram />
    <EarningSteps />
    <EnjoyRewards />
    <FAQ />
    <Footer />
  </div>
);

export default HomePage;
