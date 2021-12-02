import React from "react";
import "./pieChart.css";
import { Pie } from "react-chartjs-2";
import { PieOptions, PieData } from "ChartData/ChartConfig";

const PieChart = ({ coinList }) => {
  return (
    <div className="pie-chart">
      <Pie data={(canvas) => PieData(canvas, coinList)} options={PieOptions} />
    </div>
  );
};

export default PieChart;
