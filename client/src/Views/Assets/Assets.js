import React, { useState, useEffect } from "react";
import "./assets.css";
import Slide from "Components/Slide/Slide";
import LineChart from "Components/LineChart/LineChart";
import MarketStats from "Components/MarketStats/MarketStats";
import Table from "Components/Table/Table";
import DetailCards from "Components/DetailsCards/DetailCards";
import SearchBar from "Components/SearchBar/SearchBar";
import SelectedCoinName from "Components/SelectedCoinName/SelectedCoinName";
import Conversion from "Components/Conversion/Conversion";

const Assets = () => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [selectedData, setSelectedData] = useState({});
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C1d%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
        );
        const data = await response.json();
        setCoinList(data);
      }
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  const filterData = () => {
    for (let coin of coinList) {
      if (coin.id === selectedCoin) {
        return setSelectedData(coin);
      }
    }
  };

  useEffect(() => {
    filterData();
  }, [selectedCoin]);

  return (
    <div className="assets">
      <Slide coinList={coinList} />
      <SearchBar
        setSelectedCoin={setSelectedCoin}
        coinList={coinList}
        selectedcoin={selectedCoin}
      />
      <div className="assets-content">
        <div className="assets-left-container">
          <SelectedCoinName selectedCoin={selectedCoin} data={selectedData} />
          <LineChart selectedCoin={selectedCoin} coinList={coinList} />
          <MarketStats data={selectedData} filterData={filterData} />
        </div>
        <div className="assets-right-container">
          <DetailCards data={selectedData} />
          {/* <DetailCards selectedCoin={selectedCoin} coinList={coinList} /> */}
          <Conversion selectedCoin={selectedCoin} coinList={coinList} />
        </div>
      </div>
      <div className="assets-table-container">
        <Table setSelectedCoin={setSelectedCoin} coinList={coinList} />
      </div>
    </div>
  );
};

export default Assets;
