import React from "react";
import "./topFive.css";
import Table from "Components/Table/Table";
import DoughnutChart from "Components/DoughnutChart/DoughnutChart";
import PieChart from "Components/PieChart/PieChart";
import BarChart from "Components/BarChart/BarChart";

const TopFive = ({ coinList, setSelectedCoin, selectedCoin }) => {
  return (
    <div className="top-five">
      <Table
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
        coinList={coinList}
      />
      <div className="top-five-right-container">
        <BarChart coinList={coinList} />
        <div className="top-five-chart-container">
          <DoughnutChart coinList={coinList} />
          <PieChart coinList={coinList} />
        </div>
      </div>
    </div>
  );
};

export default TopFive;
