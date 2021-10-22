import React, { useState, useEffect } from "react";
import "./dashboard.css";
import SideNavigation from "Components/SideNavigation/SideNavigation";
import Search from "Components/Search/Search";
import LineChart from "Components/LineChart/LineChart";
import DiscoverCard from "Components/DiscoverCard/DiscoverCard";
import DiscoverHeader from "Components/DiscoverHeader/DiscoverHeader";
import Table from "Components/Table/Table";
import MarketCapTopFive from "Components/MarketCapTopFive/MarketCapTopFive";
import PieChart from "Components/PieChart/PieChart";
import BarChart from "Components/BarChart/BarChart";
import MarketCapPercentage from "Components/MarketCapPercentage/MarketCapPercentage";
import DoughnutChart from "Components/DoughnutChart/DoughnutChart";
import ExploreSection from "Components/ExploreSection/Explore";

const Dashboard = ({ coinList }) => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
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
  {
    return (
      <div className="dashboard">
        <SideNavigation />
        <div className="dashboard-content">
          <div className="discover">
            <Search
              setSelectedCoin={setSelectedCoin}
              selectedCoin={selectedCoin}
              coinList={coinList}
            />
            <DiscoverHeader coinList={coinList} selectedCoin={selectedCoin} />
            <div className="discover-details">
              <div className="discover-details-left">
                <DiscoverCard coinList={coinList} selectedCoin={selectedCoin} />
                <LineChart chartData={chartData} />
              </div>
              <Table coinList={coinList} setSelectedCoin={setSelectedCoin} />
            </div>
          </div>

          <MarketCapTopFive coinList={coinList} />
          <div className="mc-details">
            <MarketCapPercentage coinList={coinList} />
            <div className="mc-details-chart-container">
              <div className="mc-charts-container">
                <DoughnutChart coinList={coinList} />
                <PieChart coinList={coinList} />
              </div>
              <BarChart coinList={coinList} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
