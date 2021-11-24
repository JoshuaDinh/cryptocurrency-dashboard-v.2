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
  console.log(data);
  const options = {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
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
    <div className="candle-stick-chart">
      <Chart
        options={options}
        series={series}
        type="candlestick"
        width="100%"
      />
    </div>
  );
};

export default CandleStickChart;
