import React from "react";
import "./candleStick.css";
import CandleStickChart from "Components/CandleStickChart/CandleStickChart";

const CandleStick = ({ selectedCoin }) => {
  return (
    <div className="candle-stick">
      <CandleStickChart selectedCoin={selectedCoin} />
    </div>
  );
};

export default CandleStick;
