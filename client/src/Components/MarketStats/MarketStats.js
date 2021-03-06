import React from "react";
import {
  format,
  formatShortened,
  determineColor,
} from "../../Utilities/Utilities";
import "./marketStats.css";

const MarketStats = ({ selectedData }) => {
  return (
    <div className="market-stats">
      <div className="market-stats-header">
        <img
          src={selectedData.image}
          alt=""
          className="market-stats-coin-image"
        />
        <h3>Market Stats</h3>
      </div>
      <div className="market-stats-container">
        <div className="market-stats-item">
          <h4>Market Cap Rank</h4>
          <p>#{selectedData.market_cap_rank}</p>
        </div>
        <div className="market-stats-item">
          <h4>Market Cap</h4>
          <p>{formatShortened(selectedData.market_cap)}</p>
        </div>
        <div className="market-stats-item">
          <h4> 24H Change</h4>
          <p
            className={determineColor(
              selectedData.market_cap_change_percentage_24h
            )}
          >
            {`${format(selectedData.market_cap_change_percentage_24h)}%`}
          </p>
        </div>
        <div className="market-stats-item">
          <h4>Volume</h4>
          <p>{formatShortened(selectedData.total_volume)}</p>
        </div>
        <div className="market-stats-item">
          <h4>Circulating Supply</h4>
          <p>{formatShortened(selectedData.circulating_supply)}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
