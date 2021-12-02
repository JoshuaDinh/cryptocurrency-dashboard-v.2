import React from "react";
import "./topFive.css";
import Table from "Components/Table/Table";
import DoughnutChart from "Components/DoughnutChart/DoughnutChart";
import PieChart from "Components/PieChart/PieChart";

const TopFive = ({ coinList, setSelectedCoin, selectedCoin }) => {
  return (
    <div className="top-five">
      <Table
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
        coinList={coinList}
      />
      <div className="top-five-container">
        <DoughnutChart coinList={coinList} />
        <PieChart coinList={coinList} />
      </div>
    </div>
  );
};

export default TopFive;
