import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./candleStickChart.css";
import axios from "axios";
import { CandleStickData } from "ChartData/ChartConfig";

const CandleStickChart = ({ selectedCoin }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${selectedCoin}/ohlc?vs_currency=usd&days=1`
      );
      setData(response.data);
    };
    fetchData();
  }, [selectedCoin]);

  const options = {
      plotOptions: {
        candlestick: {
          colors: {
            upward: "rgba(0, 82, 162)",
            downward: " rgba(0, 38, 77, 1) ",
          },
        },
      },
      chart: {
        type: "candlestick",
      },
      title: {
        text: "24hr " + selectedCoin.toUpperCase(),
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
    series = [
      {
        data: data,
      },
    ];
  return (
    <div className="candle-stick-chart frame">
      <Chart
        options={options}
        series={series}
        type="candlestick"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default CandleStickChart;
