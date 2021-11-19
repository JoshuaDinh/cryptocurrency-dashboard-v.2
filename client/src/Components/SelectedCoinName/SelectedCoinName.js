import React, { useEffect } from "react";
import "./selectedCoinName.css";
import moment from "moment";

const SelectedCoinName = ({ data }) => {
  return (
    <div className="selected-coin-name">
      <img src={data.image} alt="" className="selected-coin-image" />
      <h1>{data.name}</h1>
      <h2>({data.symbol})</h2>
      <p>{moment(data.last_updated).format("LLLL")}</p>{" "}
    </div>
  );
};
export default SelectedCoinName;
