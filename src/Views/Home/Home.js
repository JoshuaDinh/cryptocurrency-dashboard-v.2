import React from "react";
import "./home.css";
import Navigation from "Components/Navigation/Navigation";
import Hero from "../../Sections/Home/Hero/Hero";
import Explore from "../../Sections/Home/Explore/Explore";
import Learn from "../../Sections/Home/Learn/Learn";

const Home = ({ coinList }) => {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <Explore coinList={coinList} />
      <Learn />
    </div>
  );
};

export default Home;
