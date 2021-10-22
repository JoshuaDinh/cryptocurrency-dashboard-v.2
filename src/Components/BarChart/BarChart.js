import React from "react";
import "./barChart.css";
import { Bar } from "react-chartjs-2";
import { BarChartData } from "../../ChartData/data";
import { options } from "../../ChartData/ChartConfig";

const BarChart = ({ coinList }) => {
  return (
    <>
      <div className="bar-chart">
        <Bar
          data={(canvas) => BarChartData(canvas, coinList)}
          options={options}
        />
      </div>
    </>
  );
};

export default BarChart;
