import React, { useState, useEffect } from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";
import { LineChartOptions, LineChartData } from "../../ChartData/ChartConfig";
import { format, determineColor } from "../../Utilities/Utilities";

// Renders selected coins price on top of the graph
function renderCoinPrice(coinList, selectedCoin) {
  for (let coin of coinList) {
    if (coin.id === selectedCoin) {
      return (
        <div className="days-container-price">
          <h1>${format(coin.current_price)}</h1>
          <h5 className={determineColor(coin.price_change_percentage_24h)}>
            ({format(coin.price_change_percentage_24h)}%)
          </h5>
        </div>
      );
    }
  }
}

const LineChart = ({ selectedCoin, coinList }) => {
  // Index keeps track of the selected time period for they graph to display & styling for the selectors
  const [index, setIndex] = useState(3);
  const [chartData, setChartData] = useState([]);

  const fetchLineData = [
    fetch(
      `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=1day&interval=hourly`
    ),
    fetch(
      `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=7day&interval=daily`
    ),
    fetch(
      `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=14&interval=daily`
    ),
    fetch(
      `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=30&interval=daily`
    ),
    fetch(
      `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=1hr&interval=minute`
    ),
  ];

  useEffect(() => {
    try {
      async function fetchData() {
        const [oneD, oneW, twoW, oneM, oneH] = await Promise.all(fetchLineData);
        const res = await Promise.all([
          oneD.json(),
          oneW.json(),
          twoW.json(),
          oneM.json(),
          oneH.json(),
        ]);
        setChartData(res);
      }
      if (selectedCoin) {
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  }, [selectedCoin]);

  return (
    <>
      <div className="line-chart frame">
        <div className="line-chart-container">
          {renderCoinPrice(coinList, selectedCoin)}
          <div className="days-container">
            <h4
              className={`day-item ${index === 4 && "day-active"}`}
              onClick={() => setIndex(4)}
            >
              1H
            </h4>
            <h4
              className={`day-item ${index === 0 && "day-active"}`}
              onClick={() => setIndex(0)}
            >
              24H
            </h4>
            <h4
              className={`day-item ${index === 1 && "day-active"}`}
              onClick={() => setIndex(1)}
            >
              7D
            </h4>
            <h4
              className={`day-item ${index === 2 && "day-active"}`}
              onClick={() => setIndex(2)}
            >
              14D
            </h4>
            <h4
              className={`day-item ${index === 3 && "day-active"}`}
              onClick={() => setIndex(3)}
            >
              30D
            </h4>
          </div>
        </div>
        <div className="line-canvas-container">
          <Line
            data={(canvas) => LineChartData(canvas, index, chartData)}
            options={LineChartOptions}
          />
        </div>
      </div>
    </>
  );
};

export default LineChart;
