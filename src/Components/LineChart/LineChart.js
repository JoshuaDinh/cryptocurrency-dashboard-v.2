import React from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        label: "Price(USD)",
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        borderColor: "#293241",
      },
      {
        label: "MarketCap",
        data: [15, 17, 6, 50, 26, 39],
        fill: true,
        borderColor: "#293241",
      },
    ],
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
          display: false,
        },
      },
    },
  };
  return (
    <div className="line-chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
