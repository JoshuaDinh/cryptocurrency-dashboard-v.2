import React from "react";
import "./home.css";
import Navigation from "Components/Navigation/Navigation";
import Hero from "../../Sections/Home/Hero/Hero";
import Explore from "../../Sections/Home/Explore/Explore";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <Explore />
    </div>
  );
};

export default Home;
