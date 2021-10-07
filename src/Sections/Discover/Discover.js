import React, { useState, useEffect } from "react";
import "./discover.css";
import Search from "Components/Search/Search";
import LineChart from "Components/LineChart/LineChart";
import DiscoverCard from "Components/DiscoverCard/DiscoverCard";
import DiscoverHeader from "Components/DiscoverHeader/DiscoverHeader";

const Discover = () => {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const oneDayResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=1`
        );
        const responseOne = oneDayResponse.json();
        const oneWeekResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=7`
        );
        const responseTwo = oneWeekResponse.json();
        const twoWeekResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=14`
        );
        const responseThree = twoWeekResponse.json();
        const oneMonthResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=30`
        );
        const responseFour = oneMonthResponse.json();
        const data = await Promise.all([
          responseOne,
          responseTwo,
          responseThree,
          responseFour,
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
    <section className="discover">
      <Search setSelectedCoin={setSelectedCoin} />
      <DiscoverHeader />
      <div className="discover-details">
        <LineChart />
        <DiscoverCard />
      </div>
    </section>
  );
};

export default Discover;
