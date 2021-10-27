import React, { useState, useEffect } from "react";
import "./lineChart.css";
import { Line } from "react-chartjs-2";
import { LineChartData } from "../../ChartData/data";
import { LineChartOptions } from "../../ChartData/ChartConfig";

const LineChart = ({ selectedCoin }) => {
  const [index, setIndex] = useState(4);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const oneDayResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=1day&interval=hourly`
        );
        const responseOne = oneDayResponse.json();
        const oneWeekResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=7day&interval=daily`
        );
        const responseTwo = oneWeekResponse.json();
        const twoWeekResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=14&interval=daily`
        );
        const responseThree = twoWeekResponse.json();
        const oneMonthResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=30&interval=daily`
        );
        const responseFour = oneMonthResponse.json();
        const oneHrResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=1hr&interval=minute`
        );
        const responseFive = oneHrResponse.json();

        const data = await Promise.all([
          responseOne,
          responseTwo,
          responseThree,
          responseFour,
          responseFive,
        ]);
        setChartData(data);
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
      <div className="line-chart-container">
        <div className="days-container">
          <h4
            className={`day-item ${index === 4 && "day-active"}`}
            onClick={() => setIndex(4)}
          >
            1Hour
          </h4>
          <h4
            className={`day-item ${index === 0 && "day-active"}`}
            onClick={() => setIndex(0)}
          >
            24Hours
          </h4>
          <h4
            className={`day-item ${index === 1 && "day-active"}`}
            onClick={() => setIndex(1)}
          >
            7 Days
          </h4>
          <h4
            className={`day-item ${index === 2 && "day-active"}`}
            onClick={() => setIndex(2)}
          >
            14 Days
          </h4>
          <h4
            className={`day-item ${index === 3 && "day-active"}`}
            onClick={() => setIndex(3)}
          >
            30 Days
          </h4>
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
