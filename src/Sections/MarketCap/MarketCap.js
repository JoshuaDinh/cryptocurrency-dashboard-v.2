import Card from "Components/Card/Card";
import Table from "Components/Table/Table";
import React from "react";
import "./marketCap.css";

const MarketCap = () => {
  return (
    <div className="market-cap">
      <div className="mc-card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default MarketCap;
