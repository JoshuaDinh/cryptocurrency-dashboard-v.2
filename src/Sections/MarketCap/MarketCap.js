import MarketCapTopFive from "Components/MarketCapTopFive/MarketCapTopFive";
import React from "react";
import "./marketCap.css";

const MarketCap = ({ coinList }) => {
  return (
    <div className="market-cap">
      <MarketCapTopFive coinList={coinList} />
    </div>
  );
};

export default MarketCap;
