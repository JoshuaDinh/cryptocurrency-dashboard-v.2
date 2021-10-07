import React, { useState, useEffect } from "react";
import "./app.css";
import Search from "Components/Search/Search";
import SideNavigation from "Components/SideNavigation/SideNavigation";
import Discover from "./Sections/Discover/Discover";
import MarketCap from "./Sections/MarketCap/MarketCap";

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
        );
        const data = await response.json();
        setCoinList(data);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // console.log(coinList);
  return (
    <div className="app">
      <SideNavigation />
      <div className="app-content">
        <Search setSelectedCoin={setSelectedCoin} />
        <Discover />
        <MarketCap />
      </div>
    </div>
  );
};

export default App;
