import React from "react";
import "./polarAreaChart.css";
import { Doughnut, Line } from "react-chartjs-2";

const PolarAreaChart = ({ coinList }) => {
  console.log(coinList);
  return (
    <>
      <div className="polar-area-chart">
        <Doughnut />
      </div>
    </>
  );
};

export default PolarAreaChart;
