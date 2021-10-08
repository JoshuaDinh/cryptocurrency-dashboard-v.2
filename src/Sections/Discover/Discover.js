import React, { useState, useEffect } from "react";
import "./discover.css";
import Search from "Components/Search/Search";
import LineChart from "Components/LineChart/LineChart";
import DiscoverCard from "Components/DiscoverCard/DiscoverCard";
import DiscoverHeader from "Components/DiscoverHeader/DiscoverHeader";
import Table from "Components/Table/Table";
const Discover = ({ coinList }) => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const oneDayResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1day&interval=hourly`
        );
        const responseOne = oneDayResponse.json();
        const oneWeekResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7day&interval=daily`
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
    <div className="discover">
      <Search setSelectedCoin={setSelectedCoin} coinList={coinList} />
      <DiscoverHeader coinList={coinList} selectedCoin={selectedCoin} />
      <div className="discover-details">
        <div className="discover-details-left">
          <Table coinList={coinList} setSelectedCoin={setSelectedCoin} />
          <LineChart chartData={chartData} />
        </div>
        <DiscoverCard coinList={coinList} selectedCoin={selectedCoin} />
      </div>
    </div>
  );
};

export default Discover;
