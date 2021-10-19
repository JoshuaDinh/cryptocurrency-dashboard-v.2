import React from "react";
import "./home.css";
import Navigation from "Components/Navigation/Navigation";
import DashboardCta from "../../Components/DashboardCTASection/DashboardCta";
import Hero from "../../Components/HeroSection/Hero";
import Explore from "../../Components/ExploreSection/Explore";
import Learn from "../../Components/LearnSection/Learn";
import Analytics from "../../Components/AnalyticsSection/Analytics";

const Home = ({ coinList }) => {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <DashboardCta coinList={coinList} />
      <Explore coinList={coinList} />
      <Analytics coinList={coinList} />
      <Learn />
    </div>
  );
};

export default Home;
