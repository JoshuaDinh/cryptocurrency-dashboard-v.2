import React from "react";
import { Bar } from "react-chartjs-2";
import "./barChart.css";
import { BarChartData, BarChartOptions } from "ChartData/ChartConfig";

const BarChart = ({ coinList }) => {
  return (
    <div className="bar-chart frame">
      <Bar
        options={BarChartOptions}
        data={(canvas) => BarChartData(canvas, coinList)}
      />
    </div>
  );
};

export default BarChart;
