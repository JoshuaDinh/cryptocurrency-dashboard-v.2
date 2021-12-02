import React from "react";
import { Doughnut } from "react-chartjs-2";
import { DoughnutOptions, DoughnutData } from "ChartData/ChartConfig";
import "./doughnut.css";

const DoughnutChart = ({ coinList }) => {
  return (
    <div className="doughnut-chart frame">
      <Doughnut
        data={(canvas) => DoughnutData(canvas, coinList)}
        options={DoughnutOptions}
      />
    </div>
  );
};

export default DoughnutChart;
