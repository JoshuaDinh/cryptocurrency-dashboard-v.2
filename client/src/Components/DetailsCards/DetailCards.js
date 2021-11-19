import React from "react";
import "./detailCards.css";
import {
  determineColor,
  format,
  formatShortened,
} from "../../Utilities/Utilities";

const DetailCards = ({ data }) => {
  return (
    <div className="detail-cards-container">
      <div className="detail-card frame">
        <div className="detail-card-info">
          <h4>Price Change $ 24H :</h4>
          <span className={determineColor(data.price_change_24h)}>
            ${format(data.price_change_24h)}
          </span>
        </div>
        <div className="detail-card-info">
          <h4>Price Change % 1H :</h4>
          <span
            className={determineColor(
              data.price_change_percentage_1h_in_currency
            )}
          >
            {formatShortened(data.price_change_percentage_1h_in_currency)}%
          </span>
        </div>
        <div className="detail-card-info">
          <h4>Price Change % 7D :</h4>
          <span
            className={determineColor(
              data.price_change_percentage_7d_in_currency
            )}
          >
            {formatShortened(data.price_change_percentage_7d_in_currency)}%
          </span>
        </div>
        <div className="detail-card-info">
          <h4>Price Change % 30D :</h4>
          <span
            className={determineColor(
              data.price_change_percentage_30d_in_currency
            )}
          >
            {formatShortened(data.price_change_percentage_30d_in_currency)}%
          </span>
        </div>
      </div>
      <div className="detail-card frame">
        <div className="detail-card-info">
          <h4>24H High :</h4>
          <span>${format(data.high_24h)}</span>
        </div>
        <div className="detail-card-info">
          <h4>24H low :</h4>
          <span>${format(data.low_24h)}</span>
        </div>
        <div className="detail-card-info">
          <h4>All Time High :</h4>
          <span>${format(data.ath)}</span>
        </div>
        <div className={"detail-card-info"}>
          <h4>All Time Low :</h4>
          <span>${format(data.atl)}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailCards;
