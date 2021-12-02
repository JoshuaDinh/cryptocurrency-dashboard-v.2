import React, { useState, useEffect } from "react";
import "./searchAsset.css";
import Slide from "Components/Slide/Slide";
import LineChart from "Components/LineChart/LineChart";
import MarketStats from "Components/MarketStats/MarketStats";
import DetailCards from "Components/DetailsCards/DetailCards";
import SearchBar from "Components/SearchBar/SearchBar";
import SelectedCoinHeader from "Components/SelectedCoinHeader/SelectedCoinHeader";
import CandleStickChart from "Components/CandleStickChart/CandleStickChart";

const SearchAsset = ({ selectedCoin, setSelectedCoin, coinList }) => {
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
          <SelectedCoinHeader
            selectedCoin={selectedCoin}
            selectedData={selectedData}
          />
          <LineChart selectedCoin={selectedCoin} coinList={coinList} />
          <MarketStats selectedData={selectedData} />
        </div>
        <div className="assets-right-container">
          <CandleStickChart
            selectedCoin={selectedCoin}
            selectedData={selectedData}
          />
          <DetailCards data={selectedData} />
        </div>
      </div>
    </div>
  );
};

export default SearchAsset;
