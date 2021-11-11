import React from "react";
import {
  format,
  formatShortened,
  determineColor,
} from "../../Utilities/Utilities";
import "./marketStats.css";

const MarketStats = ({ coinList, selectedCoin }) => {
  function renderMarketStats() {
    for (let coin of coinList) {
      if (coin.id === selectedCoin) {
        return (
          <>
            <h3>Market Stats</h3>
            <div className="market-stats-container ">
              <div className="market-stats-item">
                <h4>Market Cap Rank</h4>
                <p>#{coin.market_cap_rank}</p>
              </div>
              <div className="market-stats-item">
                <h4>Market Cap</h4>
                <p>{formatShortened(coin.market_cap)}</p>
              </div>
              <div className="market-stats-item">
                <h4> 24H Change</h4>
                <p
                  className={determineColor(
                    coin.market_cap_change_percentage_24h
                  )}
                >
                  {`${format(coin.market_cap_change_percentage_24h)}%`}
                </p>
              </div>
              <div className="market-stats-item">
                <h4>Volume</h4>
                <p>{formatShortened(coin.total_volume)}</p>
              </div>
              <div className="market-stats-item">
                <h4>Circulating Supply</h4>
                <p>{formatShortened(coin.circulating_supply)}</p>
              </div>
            </div>
          </>
        );
      }
    }
  }

  return (
    <div className="market-stats frame">
      {renderMarketStats(coinList, selectedCoin)}
    </div>
  );
};

export default MarketStats;
