import React from "react";
import "./marketCapPercentage.css";
import { determineColor } from "Utilities/Utilities";

const MarketCapPercentage = ({ coinList }) => {
  console.log(coinList);
  function renderMarketTable() {
    return coinList.map((coin) => {
      return (
        <div className="mc-percentage-row ">
          <div className="mc-percentage-row-left">
            <img className="mc-percentage-img " src={coin.image} alt="" />
            <h4 className="mc-percentage-item">{coin.name}</h4>
          </div>
          <span
            className={`mc-percentage-item ${determineColor(
              coin.market_cap_change_percentage_24h
            )}`}
          >
            {coin.market_cap_change_percentage_24h}%
          </span>
        </div>
      );
    });
  }
  return (
    <div className="mc-percentage">
      <div className="mc-percentage-row ">
        <div className="mc-percentage-row-left">
          <span className="mc-percentage-img ">#</span>
          <h4 className="mc-percentage-item">Name</h4>
        </div>

        <span className={`mc-percentage-item `}>MarketCap Change %</span>
      </div>
      {renderMarketTable(coinList)}
    </div>
  );
};

export default MarketCapPercentage;
