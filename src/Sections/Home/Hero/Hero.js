import React from "react";
import { NavLink } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1>The future of money is here.. </h1>
      <h3>Explore the posibilities</h3>
      <NavLink to="/ads" className="hero-nav-link">
        Learn More
      </NavLink>
    </div>
  );
};

export default Hero;
