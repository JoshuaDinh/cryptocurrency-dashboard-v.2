import React from "react";
import "./pieChart.css";
import { PolarArea } from "react-chartjs-2";

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Top 5 by Price",
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

const PieChart = ({ coinList }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 180);
    gradient.addColorStop(1, "rgb(58, 96, 115, 0.9)");
    gradient.addColorStop(0, "rgb(22, 34, 42,0.9)");

    const sortedArray = [...coinList];
    const arr = sortedArray.sort((a, b) => {
      return b.current_price - a.current_price;
    });

    let sortedData = [];
    const sortedArr = sortedArray.slice(0, 5).map((coin) => {
      sortedData.push(coin);
    });

    console.log(sortedData);
    return {
      labels: [
        sortedData[0]?.name,
        sortedData[1]?.name,
        sortedData[2]?.name,
        sortedData[3]?.name,
        sortedData[4]?.name,
      ],
      datasets: [
        {
          data: [
            sortedData[0]?.current_price,
            sortedData[1]?.current_price,
            sortedData[2]?.current_price,
            sortedData[3]?.current_price,
            sortedData[4]?.current_price,
          ],
          backgroundColor: [
            gradient,
            "rgb(22, 34, 42)",
            "rgb(58, 96, 115, 0.5)",
            "rgb(58, 96, 115, 0.9)",
            "rgb(22, 34, 42,0.9)",
          ],
        },
      ],
    };
  };
  return (
    <div className="pie-chart">
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PieChart;
