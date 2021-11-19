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

const Assets = ({ coinList }) => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");

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
          <SelectedCoinName selectedCoin={selectedCoin} coinList={coinList} />
          <LineChart selectedCoin={selectedCoin} coinList={coinList} />
          <MarketStats selectedCoin={selectedCoin} coinList={coinList} />
        </div>
        <div className="assets-right-container">
          <DetailCards selectedCoin={selectedCoin} coinList={coinList} />
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
