import React, { useEffect } from "react";
import "./selectedCoinHeader.css";
import moment from "moment";

const SelectedCoinHeader = ({ data }) => {
  return (
    <div className="selected-coin-header">
      <img src={data.image} alt="" className="selected-coin-image" />
      <h1>{data.name}</h1>
      <h4>({data.symbol.toUpperCase()})</h4>
      <p>{moment(data.last_updated).format("LLLL")}</p>{" "}
    </div>
  );
};
export default SelectedCoinHeader;
