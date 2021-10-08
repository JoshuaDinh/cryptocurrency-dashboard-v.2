import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./doughnut.css";

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      grid: {
        display: true,
      },
      ticks: { display: false },
    },
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: { display: false },
    },
  },
};

const DoughnutChart = ({ coinList }) => {
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
        data: [
          coinList[0]?.market_cap,
          coinList[1]?.market_cap,
          coinList[2]?.market_cap,
          coinList[3]?.market_cap,
          coinList[4]?.market_cap,
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
    <div className="doughnut">
      <div className="tooltip">
        <h3>Top 5 by MarketCap</h3>
      </div>

      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
