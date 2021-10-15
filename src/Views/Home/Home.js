import React from "react";
import "./home.css";
import Navigation from "Components/Navigation/Navigation";
import DashboardCta from "../../Components/DashboardCTA/DashboardCta";
import Hero from "../../Components/Hero/Hero";
import Explore from "../../Components/Explore/Explore";
import Learn from "../../Components/Learn/Learn";
import Analytics from "../../Components/Analytics/Analytics";

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
