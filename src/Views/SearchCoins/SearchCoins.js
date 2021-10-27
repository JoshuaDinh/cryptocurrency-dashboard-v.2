import React, { useState, useEffect } from "react";
import "./searchCoins.css";
import SideNavigation from "Components/SideNavigation/SideNavigation";
import LineChart from "Components/LineChart/LineChart";
import MainDetails from "Components/MainDetails/MainDetails";
import Table from "Components/Table/Table";
import DetailCards from "../../Components/DiscoverCard/DetailCards";
import SearchBar from "../../Components/SearchBar/SearchBar";

const SearchCoins = ({ coinList }) => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");

  {
    return (
      <div className="search-coins">
        <SideNavigation />
        <div className="search-coins-container">
          <SearchBar
            setSelectedCoin={setSelectedCoin}
            selectedCoin={selectedCoin}
            coinList={coinList}
          />
          <MainDetails coinList={coinList} selectedCoin={selectedCoin} />
          <div className="search-coins-content">
            <div className="search-coins-left">
              <DetailCards coinList={coinList} selectedCoin={selectedCoin} />
              <LineChart selectedCoin={selectedCoin} />
            </div>
            <Table coinList={coinList} setSelectedCoin={setSelectedCoin} />
          </div>
        </div>
      </div>
    );
  }
};

export default SearchCoins;
