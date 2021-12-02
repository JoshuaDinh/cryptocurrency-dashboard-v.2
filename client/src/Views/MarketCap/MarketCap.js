import React from "react";
import "./marketCap.css";
import Table from "Components/Table/Table";
import DoughnutChart from "Components/DoughnutChart/DoughnutChart";

const MarketCap = ({ coinList, setSelectedCoin, selectedCoin }) => {
  return (
    <div className="market-cap">
      <Table
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
        coinList={coinList}
      />
      <div className="market-cap-chart-container ">
        <DoughnutChart coinList={coinList} />
      </div>
    </div>
  );
};

export default MarketCap;
