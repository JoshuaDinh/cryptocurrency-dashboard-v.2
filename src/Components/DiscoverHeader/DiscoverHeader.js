import React from "react";
import { format, determineColor } from "../../Utilities/Utilities";
import moment from "moment";
import "./discoverHeader.css";

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
          atl,
          ath,
          last_updated,
        } = coin;
        return (
          <>
            <div className="discover-header-container">
              <img src={image} alt="#" className="discover-header-img" />
              <h2>
                {name} | {symbol}
              </h2>
              <h2>{format(current_price)}</h2>
              <span
                className={determineColor(coin.price_change_percentage_24h)}
              >
                ({price_change_percentage_24h})
              </span>
            </div>
            <div className="discover-header-container-middle">
              <h5>
                24Hr Low :<span className="red">{format(low_24h)}</span>
              </h5>
              <h5>
                24Hr High : <span className="green">{format(high_24h)}</span>
              </h5>
              <h5>
                ATL : <span className="red">${atl}</span>
              </h5>
              <h5>
                ATH :<span className="green">${ath}</span>
              </h5>
              <span className="discover-header-updated">
                Last Updated at :
                {moment(last_updated).format("MMMM Do YYYY, h:mm:ss a")}
              </span>{" "}
            </div>
          </>
        );
      }
    }
  }
  return <div className="discover-header">{updateData()}</div>;
};

export default DiscoverHeader;
