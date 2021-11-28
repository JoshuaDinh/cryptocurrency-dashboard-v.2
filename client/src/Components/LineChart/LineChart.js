import React, { useState, useEffect } from "react";
import "./lineChart.css";
import axios from "axios";
import Loader from "Components/Loader/Loader";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      async function fetchData() {
        const oneD = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=1day&interval=hourly`
        );
        const oneW = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=7day&interval=daily`
        );
        const twoW = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=14&interval=daily`
        );
        const oneM = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=30&interval=daily`
        );
        const oneH = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=1hr&interval=minute`
        );

        const res = [oneD.data, oneW.data, twoW.data, oneM.data, oneH.data];

        setChartData(res);
        setLoading(false);
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
        {loading ? (
          <Loader />
        ) : (
          <div className="line-canvas-container">
            <Line
              data={(canvas) => LineChartData(canvas, index, chartData)}
              options={LineChartOptions}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LineChart;
