import React, { useState } from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  const [index, setIndex] = useState(4);

  let label = [];
  for (let i = 0; i < chartData[index]?.market_caps.length; i++) {
    label.push(i);
  }

  const data = (index) => {
    return {
      labels: label,
      datasets: [
        {
          label: "Price(USD)",
          data: chartData[index]?.prices,
          fill: true,
          borderColor: "#000000",
        },
      ],
    };
  };

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

  console.log(chartData);
  return (
    <>
      <div className="line-chart-container">
        <div className="days-container">
          <h4 className="day-item" onClick={() => setIndex(4)}>
            1Hour
          </h4>
          <h4 className="day-item" onClick={() => setIndex(0)}>
            24Hours
          </h4>
          <h4 className="day-item" onClick={() => setIndex(1)}>
            7 Days
          </h4>
          <h4 className="day-item" onClick={() => setIndex(2)}>
            14 Days
          </h4>
          <h4 className="day-item" onClick={() => setIndex(3)}>
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
