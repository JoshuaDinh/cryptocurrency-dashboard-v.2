import React from "react";
import "./doughnut.css";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ coinList }) => {
  console.log(coinList);
  return (
    <div className="doughnut-chart frame">
      <Doughnut />
    </div>
  );
};

export default DoughnutChart;
