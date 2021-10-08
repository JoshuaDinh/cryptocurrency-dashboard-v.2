import React from "react";
import "./polarChart.css";
import { PolarArea } from "react-chartjs-2";

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

const PolarChart = ({ coinList }) => {
  const data = {
    labels: [
      coinList[0]?.symbol,
      coinList[1]?.symbol,
      coinList[2]?.symbol,
      coinList[3]?.symbol,
      coinList[4]?.symbol,
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          coinList[0]?.market_cap,
          coinList[1]?.market_cap,
          coinList[2]?.market_cap,
          coinList[3]?.market_cap,
          coinList[4]?.market_cap,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="polar-chart">
        <h3>MarketCap</h3> <PolarArea data={data} />
      </div>
    </>
  );
};

export default PolarChart;
