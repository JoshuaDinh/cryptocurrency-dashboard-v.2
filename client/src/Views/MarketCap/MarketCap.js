import React from "react";
import "./marketCap.css";
import Table from "Components/Table/Table";
import DoughnutChart from "Components/DoughnutChart/DoughnutChart";
import PieChart from "Components/PieChart/PieChart";
import AllAssets from "Components/AllAssets/AllAssets";

const MarketCap = ({ coinList, setSelectedCoin, selectedCoin }) => {
  return (
    <div className="market-cap">
      <Table
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
        coinList={coinList}
      />
      <div className="market-cap-chart-container">
        <DoughnutChart coinList={coinList} />
        <PieChart coinList={coinList} />
      </div>
      {/* <AllAssets coinList={coinList} /> */}
    </div>
  );
};

export default MarketCap;
