import React from "react";
import "./home.css";
import Navigation from "Components/Navigation/Navigation";
import DashboardCta from "../../Sections/Home/DashboardCTA/DashboardCta";
import Hero from "../../Sections/Home/Hero/Hero";
import Explore from "../../Sections/Home/Explore/Explore";
import Learn from "../../Sections/Home/Learn/Learn";
import Analytics from "../../Sections/Home/Analytics/Analytics";

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
