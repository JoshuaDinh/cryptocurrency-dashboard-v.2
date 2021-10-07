import React, { useState, useEffect } from "react";
import "./card.css";

//Chart Library
import { Line } from "react-chartjs-2";

const data = {
  labels: ["", "", "", "", "", ""],
  datasets: [
    {
      label: "Price",
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      borderColor: "#293241",
    },
  ],
};

const options = {
  legends: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  responsive: true,
  maintainAspectRation: false,
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
    },
  },
};

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src="" alt="#" />
        <p>name</p>
        <div className="card-data">
          <span>10,000</span>
          <span>50%</span>
        </div>
      </div>
      <div className="card-chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Card;
