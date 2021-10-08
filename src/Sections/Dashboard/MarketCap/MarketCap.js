import React from "react";
import "./marketCap.css";
import MarketCapTopFive from "Components/MarketCapTopFive/MarketCapTopFive";
import PieChart from "Components/PieChart/PieChart";
import BarChart from "Components/BarChart/BarChart";
import MarketCapPercentage from "Components/MarketCapPercentage/MarketCapPercentage";
import DoughnutChart from "Components/DoughnutChart/DoughnutChart";

const MarketCap = ({ coinList }) => {
  return (
    <div className="market-cap">
      <MarketCapTopFive coinList={coinList} />
      <div className="mc-details">
        <div className="mc-details-chart-container">
          <PieChart coinList={coinList} />
          <DoughnutChart coinList={coinList} />
        </div>
        <BarChart coinList={coinList} />
        <MarketCapPercentage coinList={coinList} />
      </div>
    </div>
  );
};

export default MarketCap;
