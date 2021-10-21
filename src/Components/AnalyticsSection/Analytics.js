import React, { useState, useEffect } from "react";
import "./analytics.css";
import { format } from "../../Utilities/Utilities";
import { Line } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      display: false,
    },
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
      ticks: { display: false },
    },
  },
};

const Analytics = ({ coinList }) => {
  function renderTopFive() {
    return coinList.slice(0, 4).map((coin) => {
      let label = [];
      for (let i = 0; i < coin.sparkline_in_7d.price.length; i++) {
        label.push(i);
      }
      const data = {
        labels: label,
        datasets: [
          {
            data: coin.sparkline_in_7d.price,
            fill: true,
            borderColor: " #16222a",
          },
        ],
      };
      return (
        <div key={coin.id} className="analytics-top-five">
          <div className="analytics-top-five-header">
            <img src={coin.image} alt="#" className="analytics-top-five-img" />
            <h2>{coin.name}</h2>
            <div className="analytics-top-five-data">
              <span>MarketCap : {format(coin.market_cap)}</span>
            </div>
          </div>
          <div className="analytics-top-five-sparkline">
            <Line data={data} options={options} />
          </div>
        </div>
      );
    });
  }
  return <div className="analytics-container">{renderTopFive(coinList)}</div>;
};

export default Analytics;
