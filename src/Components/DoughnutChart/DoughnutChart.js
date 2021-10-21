import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./doughnut.css";

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Top 5 by Market Cap",
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
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
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 180);
    gradient.addColorStop(1, "rgb(58, 96, 115, 0.9)");
    gradient.addColorStop(0, "rgb(22, 34, 42,0.9)");
    return {
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
            gradient,
            "rgb(22, 34, 42)",
            "rgb(58, 96, 115, 0.5)",
            "rgb(58, 96, 115, 0.9)",
            "rgb(22, 34, 42,0.9)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };
  return (
    <div className="doughnut">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
