import React from "react";
import "./marketCap.css";
import MarketCapTopFive from "Components/MarketCapTopFive/MarketCapTopFive";
import PolarChart from "Components/PolarChart/PolarChart";

const MarketCap = ({ coinList }) => {
  return (
    <div className="market-cap">
      <MarketCapTopFive coinList={coinList} />
      <div className="mc-details">
        <PolarChart coinList={coinList} />
      </div>
    </div>
  );
};

export default MarketCap;
