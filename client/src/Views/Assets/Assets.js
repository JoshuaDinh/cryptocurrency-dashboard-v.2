import React, { useState, useEffect } from "react";
import "./assets.css";
import axios from "axios";
import Slide from "Components/Slide/Slide";
import LineChart from "Components/LineChart/LineChart";
import MarketStats from "Components/MarketStats/MarketStats";
import Table from "Components/Table/Table";
import DetailCards from "Components/DetailsCards/DetailCards";
import SearchBar from "Components/SearchBar/SearchBar";
import SelectedCoinHeader from "Components/SelectedCoinHeader/SelectedCoinHeader";
import Conversion from "Components/Conversion/Conversion";
import CandleStickChart from "Components/CandleStickChart/CandleStickChart";

const Assets = ({ selectedCoin, setSelectedCoin, coinList }) => {
  const [selectedData, setSelectedData] = useState({});

  const filterData = (coinList) => {
    for (let coin of coinList) {
      if (coin.id === selectedCoin) {
        setSelectedData(coin);
      }
    }
  };

  useEffect(() => {
    filterData(coinList);
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
          <SelectedCoinHeader selectedCoin={selectedCoin} data={selectedData} />
          <LineChart selectedCoin={selectedCoin} coinList={coinList} />
          <MarketStats data={selectedData} />
        </div>
        <div className="assets-right-container">
          {/* <DetailCards data={selectedData} /> */}
          {/* <Table setSelectedCoin={setSelectedCoin} coinList={coinList} /> */}
          {/* <Conversion coinList={coinList} selectedCoin={selectedCoin} /> */}
          <CandleStickChart selectedCoin={selectedCoin} />
          <DetailCards data={selectedData} />
        </div>
      </div>
    </div>
  );
};

export default Assets;
