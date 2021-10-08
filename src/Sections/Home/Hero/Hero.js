import React from "react";
import Link from "Components/Link/Link";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1>The future of money is here.. </h1>
      <h3>Explore the posibilities</h3>
      <Link title="Learn More" link="/" />
    </div>
  );
};

export default Hero;
