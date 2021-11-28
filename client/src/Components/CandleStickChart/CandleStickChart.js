import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./candleStickChart.css";
import axios from "axios";
import Loader from "Components/Loader/Loader";

const CandleStickChart = ({ selectedCoin, selectedData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${selectedCoin}/ohlc?vs_currency=usd&days=1`
      );
      setData(response.data);
    };
    fetchData();
    setLoading(false);
  }, [selectedCoin]);

  const options = {
      plotOptions: {
        candlestick: {
          colors: {
            upward: "rgba(0, 82, 162, 1)",
            downward: "rgba(201, 31, 31, 0.75)",
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
      chart: {
        type: "candlestick",
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
      <h4>{selectedData.symbol?.toUpperCase()}</h4>
      {loading ? (
        <Loader />
      ) : (
        <Chart
          options={options}
          series={series}
          type="candlestick"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default CandleStickChart;
