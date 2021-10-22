import React, { useState } from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";
import { LineChartData } from "../../ChartData/data";
import { LineChartOptions } from "../../ChartData/ChartConfig";

const LineChart = ({ chartData }) => {
  const [index, setIndex] = useState(4);
  return (
    <>
      <div className="line-chart-container">
        <div className="days-container">
          <h4
            className={`day-item ${index === 4 && "day-active"}`}
            onClick={() => setIndex(4)}
          >
            1Hour
          </h4>
          <h4
            className={`day-item ${index === 0 && "day-active"}`}
            onClick={() => setIndex(0)}
          >
            24Hours
          </h4>
          <h4
            className={`day-item ${index === 1 && "day-active"}`}
            onClick={() => setIndex(1)}
          >
            7 Days
          </h4>
          <h4
            className={`day-item ${index === 2 && "day-active"}`}
            onClick={() => setIndex(2)}
          >
            14 Days
          </h4>
          <h4
            className={`day-item ${index === 3 && "day-active"}`}
            onClick={() => setIndex(3)}
          >
            30 Days
          </h4>
        </div>
        <div className="line-canvas-container">
          <Line
            data={(canvas) => LineChartData(canvas, index, chartData)}
            options={LineChartOptions}
          />
        </div>
      </div>
    </>
  );
};

export default LineChart;
