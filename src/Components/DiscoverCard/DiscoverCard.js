import React from "react";
import "./discoverCard.css";
import moment from "moment";
import { format, determineColor } from "../../Utilities/Utilities";

const DiscoverCard = ({ coinList, selectedCoin }) => {
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
                Market Cap :<span> {format(market_cap)}</span>
              </p>
              <p>
                24hhr Change :<span> {format(market_cap_change_24h)}</span>
              </p>
              <p>
                24hr Change % :
                <span
                  className={determineColor(market_cap_change_percentage_24h)}
                >
                  {market_cap_change_percentage_24h}
                </span>
              </p>
            </div>
            <div className="discover-card">
              <p>
                Circulating Supply : <span>{format(circulating_supply)}</span>
              </p>
              <p>
                Max Supply : <span>{format(max_supply)}</span>
              </p>
            </div>
            <div className="discover-card">
              <p>Total Volume : {format(total_volume)}</p>
            </div>
          </>
        );
      }
    }
  }

  return <div className="discover-card-container">{updateDiscoverCard()}</div>;
};

export default DiscoverCard;
