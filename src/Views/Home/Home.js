import React from "react";
import "./home.css";
import Navigation from "Components/Navigation/Navigation";
import Hero from "../../Sections/Home/Hero/Hero";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Hero />
    </div>
  );
};

export default Home;
