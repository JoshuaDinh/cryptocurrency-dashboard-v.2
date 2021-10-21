import React from "react";
import "./discoverCard.css";
import { format, determineColor } from "../../Utilities/Utilities";

const DiscoverCard = ({ coinList, selectedCoin }) => {
  console.log(coinList);
  function updateDiscoverCard() {
    for (let coin of coinList) {
      if (coin.id === selectedCoin) {
        const {
          market_cap,
          total_volume,
          circulating_supply,
          max_supply,
          market_cap_change_percentage_24h,
          market_cap_change_24h,
        } = coin;
        return (
          <>
            <div className="discover-card">
              <p>
                <span className="discover-card-title">Market Cap :</span>
                <span className="discover-card-title">
                  {format(market_cap)}
                </span>
              </p>
              <p>
                <span> 24hr MC Change :</span>{" "}
                <span
                  className={determineColor(market_cap_change_percentage_24h)}
                >
                  {format(market_cap_change_24h)}
                </span>
              </p>
              <p>
                <span>24hr MC Change % :</span>
                <span
                  className={determineColor(market_cap_change_percentage_24h)}
                >
                  {market_cap_change_percentage_24h}
                </span>
              </p>
              <p>
                <span className="discover-card-title">
                  Circulating Supply :
                </span>
                <span className="discover-card-title">
                  {format(circulating_supply)}
                </span>
              </p>
              <p>
                <span className="discover-card-title">Max Supply : </span>
                <span className="discover-card-title">
                  {format(max_supply)}
                </span>
              </p>{" "}
              <p>
                <span className="discover-card-title">Total Volume : </span>
                <span className="discover-card-title">
                  {format(total_volume)}
                </span>
              </p>
            </div>
          </>
        );
      }
    }
  }

  return <div className="discover-card-container">{updateDiscoverCard()}</div>;
};

export default DiscoverCard;
