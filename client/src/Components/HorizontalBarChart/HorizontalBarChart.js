import React from "react";
import { Bar } from "react-chartjs-2";
import "./horizontalBarChart.css";
import { HBarChartData, HBarChartOptions } from "ChartData/ChartConfig";

const HorizontalBarChart = ({ coinList }) => {
  console.log(coinList);
  return (
    <div className="horizontal-bar-chart frame">
      <Bar
        options={HBarChartOptions}
        data={(canvas) => HBarChartData(canvas, coinList)}
      />
    </div>
  );
};

export default HorizontalBarChart;
