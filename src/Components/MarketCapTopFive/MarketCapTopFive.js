import React, { useState, useEffect } from "react";
import "./marketCapTopFive.css";
import { format } from "../../Utilities/Utilities";
import { Line } from "react-chartjs-2";

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
      ticks: { display: false },
    },
  },
};

const MarketCapTopFive = ({ coinList }) => {
  function renderTopFive() {
    return coinList.slice(0, 5).map((coin) => {
      let label = [];
      for (let i = 0; i < coin.sparkline_in_7d.price.length; i++) {
        label.push(i);
      }
      const data = {
        labels: label,
        datasets: [
          {
            label: "Price",
            data: coin.sparkline_in_7d.price,
            fill: true,
            borderColor: "#293241",
          },
        ],
      };
      return (
        <div key={coin.id} className="mc-top-five">
          <div className="mc-top-five-header">
            <img src={coin.image} alt="#" className="mc-top-five-img" />
            <p>{coin.name}</p>
            <div className="mc-top-five-data">
              <span>MarketCap : {format(coin.market_cap)}</span>
            </div>
          </div>
          <div className="mc-top-5-sparkline">
            <Line data={data} options={options} />
          </div>
        </div>
      );
    });
  }
  return <div className="mc-top-five-container">{renderTopFive(coinList)}</div>;
};

export default MarketCapTopFive;
