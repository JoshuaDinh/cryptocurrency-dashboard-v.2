import React from "react";
import "./pieChart.css";
import { Pie } from "react-chartjs-2";

const options = {
  maintainAspectRatio: false,
  responsive: true,
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

const PieChart = ({ coinList }) => {
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
        label: "# of Votes",
        data: [
          coinList[0]?.market_cap_change_percentage_24h,
          coinList[1]?.market_cap_change_percentage_24h,
          coinList[2]?.market_cap_change_percentage_24h,
          coinList[3]?.market_cap_change_percentage_24h,
          coinList[4]?.market_cap_change_percentage_24h,
        ],
        backgroundColor: [
          "rgb(58, 96, 115)",
          "rgb(22, 34, 42)",
          "rgb(10, 102, 148)",
          "rgb(153, 154, 155)",
          "rgb(219, 159, 30)",
        ],
      },
    ],
  };
  return (
    <>
      <div className="pie-chart">
        <div className="tooltip">
          <h3>MarketCap 24HR Change</h3>
        </div>
        <Pie data={data} options={options} />
      </div>
    </>
  );
};

export default PieChart;
