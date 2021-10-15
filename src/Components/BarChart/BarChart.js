import React from "react";
import "./barChart.css";
import { Bar } from "react-chartjs-2";

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

const BarChart = ({ coinList }) => {
  const data = {
    labels: [
      coinList[0]?.name,
      coinList[1]?.name,
      coinList[2]?.name,
      coinList[3]?.name,
      coinList[4]?.name,
    ],
    datasets: [
      {
        label: "Market-Cap 24 HR Change (USD)",
        data: [
          coinList[0]?.market_cap_change_24h,
          coinList[1]?.market_cap_change_24h,
          coinList[2]?.market_cap_change_24h,
          coinList[3]?.market_cap_change_24h,
          coinList[4]?.market_cap_change_24h,
        ],
        backgroundColor: [
          "rgb(58, 96, 115)",
          "rgb(22, 34, 42)",
          "rgb(10, 102, 148)",
          "rgb(153, 154, 155)",
          "rgb(219, 159, 30)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="bar-chart">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default BarChart;
