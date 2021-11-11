import React from "react";
import "./detailCards.css";
import {
  determineColor,
  format,
  formatShortened,
} from "../../Utilities/Utilities";

function updateDetailCards(coinList, selectedCoin) {
  for (let coin of coinList) {
    if (coin.id === selectedCoin) {
      return (
        <>
          <div className="detail-card frame">
            <div className="detail-card-info">
              <h4>Price Change $ 24H :</h4>
              <span className={determineColor(coin.price_change_24h)}>
                ${format(coin.price_change_24h)}
              </span>
            </div>
            <div className="detail-card-info">
              <h4>Price Change % 1H :</h4>
              <span
                className={determineColor(
                  coin.price_change_percentage_1h_in_currency
                )}
              >
                {formatShortened(coin.price_change_percentage_1h_in_currency)}%
              </span>
            </div>
            <div className="detail-card-info">
              <h4>Price Change % 7D :</h4>
              <span
                className={determineColor(
                  coin.price_change_percentage_7d_in_currency
                )}
              >
                {formatShortened(coin.price_change_percentage_7d_in_currency)}%
              </span>
            </div>
            <div className="detail-card-info">
              <h4>Price Change % 30D :</h4>
              <span
                className={determineColor(
                  coin.price_change_percentage_30d_in_currency
                )}
              >
                {formatShortened(coin.price_change_percentage_30d_in_currency)}%
              </span>
            </div>
          </div>

          <div className="detail-card frame">
            <div className="detail-card-info">
              <h4>24H High :</h4>
              <span>${format(coin.high_24h)}</span>
            </div>
            <div className="detail-card-info">
              <h4>24H low :</h4>
              <span>${format(coin.low_24h)}</span>
            </div>
            <div className="detail-card-info">
              <h4>All Time High :</h4>
              <span>${format(coin.ath)}</span>
            </div>
            <div className={"detail-card-info"}>
              <h4>All Time Low :</h4>
              <span>${format(coin.atl)}</span>
            </div>
          </div>
        </>
      );
    }
  }
}

const DetailCards = ({ coinList, selectedCoin }) => {
  return (
    <div className="detail-cards-container">
      {updateDetailCards(coinList, selectedCoin)}
    </div>
  );
};

export default DetailCards;
