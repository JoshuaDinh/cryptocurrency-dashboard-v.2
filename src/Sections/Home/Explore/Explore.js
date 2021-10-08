import React from "react";
import "./explore.css";
import Link from "Components/Link/Link";

const Explore = () => {
  return (
    <div className="explore">
      <div className="explore-left">
        <h1>Explore digital assets, like Bitcoin, Ethereum and Dogecoin</h1>
        <h2>
          & the innovative technologies that power their infastructure
        </h2>{" "}
        <Link title="Learn More" link="/" dark />
      </div>
      <div className="explore-right"></div>
    </div>
  );
};

export default Explore;
