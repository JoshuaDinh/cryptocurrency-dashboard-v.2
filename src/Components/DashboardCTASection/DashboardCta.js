import React, { useState, useEffect } from "react";
import "./dashboardCta.css";
import Link from "Components/Link/Link";
import { Line } from "react-chartjs-2";

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      grid: {
        display: true,
      },
      ticks: { display: true },
    },
    x: {
      beginAtZero: true,
      grid: {
        display: true,
      },
    },
  },
};

const DashboardCta = () => {
  const [miniChartData, setMiniChartData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const fetchBitcoin = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1day&interval=hourly`
        );
        const btcResponse = fetchBitcoin.json();
        const fetchEth = await fetch(
          `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1day&interval=hourly`
        );
        const ethResponse = fetchEth.json();

        const fetchOmi = await fetch(
          `https://api.coingecko.com/api/v3/coins/ecomi/market_chart?vs_currency=usd&days=1day&interval=hourly`
        );
        const omiResponse = fetchOmi.json();

        const data = await Promise.all([btcResponse, ethResponse, omiResponse]);
        setMiniChartData(data);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  let label = [];
  for (let i = 0; i < miniChartData[0]?.prices.length; i++) {
    label.push(i);
  }

  console.log(miniChartData);

  const btcData = {
    labels: label,
    datasets: [
      {
        label: "Bitcoin Price 24Hr",
        data: miniChartData[0]?.prices,
        fill: true,
        borderColor: "rgb(58, 96, 115)",
        backgroundColor: "rgb(219, 159, 30,0.75)",
      },
    ],
  };

  const ethData = {
    labels: label,
    datasets: [
      {
        label: " Ethereum Price 24Hr",
        data: miniChartData[1]?.prices,
        fill: false,
        borderColor: "rgb(219, 159, 30,0.75)",
        backgroundColor: "rgb(58, 96, 115)",
      },
    ],
  };
  const omiData = {
    labels: label,
    datasets: [
      {
        label: "Omi Price 24Hr",
        data: miniChartData[2]?.prices,
        fill: false,
        borderColor: "rgb(58, 96, 115)",
      },
    ],
  };
  return (
    <div className="dashboard-cta">
      <div className="dashboard-cta-left">
        <div className="dashboard-cta-middle-chart-container">
          <Line data={btcData} option={options} />
        </div>
        <div className="dashboard-cta-chart-wrapper">
          <div className="dashboard-cta-chart-container">
            <Line data={ethData} option={options} />
          </div>
          <div className="dashboard-cta-chart-container">
            <Line data={omiData} option={options} />
          </div>
        </div>
      </div>
      <div className="dashboard-cta-right">
        <h1>Interested in numbers?</h1>
        <h2>
          Analyze what the market has to say about digital assets and their
          worth as an investment.
        </h2>
        <Link title="View Dashboard" link="/Dashboard" dark />{" "}
      </div>
    </div>
  );
};

export default DashboardCta;
