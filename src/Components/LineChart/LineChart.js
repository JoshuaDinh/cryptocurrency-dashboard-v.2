import React, { useState, useEffect } from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  const [index, setIndex] = useState(4);

  let label = [];
  for (let i = 0; i < chartData[index]?.prices.length; i++) {
    label.push(i);
  }

  function data(index) {
    return {
      labels: label,
      datasets: [
        {
          label: "Price(USD)",
          data: chartData[index]?.prices,
          fill: true,
          borderColor: "rgb(58, 96, 115)",
        },
      ],
    };
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        grid: {
          display: true,
        },
        ticks: { display: true },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
  };

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
          <Line data={data(index)} options={options} />
        </div>
      </div>
    </>
  );
};

export default LineChart;
