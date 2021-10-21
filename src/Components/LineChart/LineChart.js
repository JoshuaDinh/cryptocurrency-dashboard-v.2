import React, { useState } from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  const [index, setIndex] = useState(4);

  let label = [];
  for (let i = 0; i < chartData[index]?.prices.length; i++) {
    label.push(i);
  }

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(500, 0, 400, 0);
    gradient.addColorStop(1, "rgb(58, 96, 115, 0.9)");
    gradient.addColorStop(0, "rgb(22, 34, 42,0.9)");

    return {
      labels: label,
      datasets: [
        {
          label: "Price(USD)",
          data: chartData[index]?.prices,
          fill: true,
          borderColor: "rgb(0, 0, 0, 0.4)",
          backgroundColor: gradient,
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    elements: { point: { radius: 2 } },
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
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default LineChart;
