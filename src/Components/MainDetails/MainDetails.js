import React from "react";
import { format, determineColor } from "../../Utilities/Utilities";
import moment from "moment";
import "./mainDetails.css";

const DiscoverHeader = ({ coinList, selectedCoin }) => {
  function updateData() {
    for (let coin of coinList) {
      if (coin.id === selectedCoin) {
        const {
          name,
          symbol,
          image,
          current_price,
          price_change_percentage_24h,
          low_24h,
          high_24h,
          ath,
          atl,
          last_updated,
        } = coin;

        return (
          <>
            <div className="main-details-container">
              <div className="main-details-left">
                <img src={image} alt="#" className="main-details-img" />
                <h3>
                  {name} | {symbol.toUpperCase()}
                </h3>
                <h3>${format(current_price)}</h3>
                <h5
                  className={determineColor(coin.price_change_percentage_24h)}
                >
                  ({price_change_percentage_24h})
                </h5>
              </div>
              <div className="main-details-right">
                <h5>
                  24Hr Low <span className="red">${format(low_24h)}</span>
                </h5>
                <h5>
                  24Hr High <span className="green">${format(high_24h)}</span>
                </h5>
                <h5>
                  All Time High <span className="green">${format(ath)}</span>
                </h5>
                <h5>
                  All Time Low <span className="green">${format(atl)}</span>
                </h5>
                <span className="main-details-updated">
                  Last Updated at :
                  {moment(last_updated).format("MMMM Do YYYY, h:mm:ss a")}
                </span>
              </div>
            </div>
          </>
        );
      }
    }
  }
  return <div className="discover-header">{updateData()}</div>;
};

export default DiscoverHeader;
