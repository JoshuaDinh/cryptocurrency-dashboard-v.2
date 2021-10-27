import React from "react";
import "./detailCards.css";
import { format } from "../../Utilities/Utilities";

const DetailCards = ({ coinList, selectedCoin }) => {
  function updateDetailCards() {
    for (let coin of coinList) {
      if (coin.id === selectedCoin) {
        const {
          market_cap,
          circulating_supply,
          max_supply,
          market_cap_change_percentage_24h,
          market_cap_change_24h,
        } = coin;
        return (
          <div className="detail-cards-container">
            <div className="detail-cards">
              <p>
                Market Cap :
                <span className="detail-cards-title">{format(market_cap)}</span>
              </p>
              <p>
                24hr MC Change :<span>{format(market_cap_change_24h)}</span>
              </p>
              <p>
                24hr MC Change % :
                <span>{market_cap_change_percentage_24h}</span>
              </p>
            </div>
            <div className="detail-cards">
              <p>
                Circulating Supply :
                <span className="detail-cards-title">
                  {format(circulating_supply)}
                </span>
              </p>
              <p>
                Max Supply :{" "}
                <span className="detail-cards-title">{format(max_supply)}</span>
              </p>
            </div>
          </div>
        );
      }
    }
  }

  return <div className="detail-cards-container">{updateDetailCards()}</div>;
};

export default DetailCards;
