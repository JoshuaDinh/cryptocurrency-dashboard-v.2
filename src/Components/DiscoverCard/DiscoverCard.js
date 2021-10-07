import React from "react";
import "./discoverCard.css";

const DiscoverCard = () => {
  return (
    <div className="discover-card-container">
      <div className="discover-card">
        <p>Market Cap :</p>
        <p>2h hr Market Cap Change :</p>
        <p>24 hr Market Cap Change % :</p>
      </div>
      <div className="discover-card">
        <p>Total Volume :</p>
        <p>Fully Diluted Volume :</p>
      </div>
      <div className="discover-card">
        <p>Circulating Supply :</p>
      </div>
      <div className="discover-card">
        <p>Max Supply :</p>
      </div>
    </div>
  );
};

export default DiscoverCard;
