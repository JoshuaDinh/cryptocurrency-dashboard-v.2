import React from "react";
import "./discover.css";
import LineChart from "Components/LineChart/LineChart";
import DiscoverCard from "Components/DiscoverCard/DiscoverCard";
import DiscoverHeader from "Components/DiscoverHeader/DiscoverHeader";

const Discover = () => {
  return (
    <section className="discover">
      <DiscoverHeader />
      <div className="discover-details">
        <LineChart />
        <DiscoverCard />
      </div>
    </section>
  );
};

export default Discover;
