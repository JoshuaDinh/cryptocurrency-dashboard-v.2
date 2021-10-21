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
          label: "Market-Cap 24 HR Change (USD)",
          data: [
            coinList[0]?.market_cap_change_24h,
            coinList[1]?.market_cap_change_24h,
            coinList[2]?.market_cap_change_24h,
            coinList[3]?.market_cap_change_24h,
            coinList[4]?.market_cap_change_24h,
          ],
          backgroundColor: [
            gradient,
            "rgb(22, 34, 42)",
            "rgb(58, 96, 115, 0.5)",
            "rgb(58, 96, 115, 0.9)",
            "rgb(58, 96, 115, 0.9)",
            "rgb(22, 34, 42,0.9)",
          ],
          borderWidth: 1,
        },
      ],
    };
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
