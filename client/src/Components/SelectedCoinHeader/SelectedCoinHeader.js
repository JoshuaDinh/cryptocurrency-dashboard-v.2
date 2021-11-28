import React from "react";
import "./selectedCoinHeader.css";
import moment from "moment";

const SelectedCoinHeader = ({ selectedData }) => {
  return (
    <div className="selected-coin-header">
      <img src={selectedData.image} alt="" className="selected-coin-image" />
      <h1>{selectedData.name}</h1>
      <h4>({selectedData?.symbol?.toUpperCase()})</h4>
      <p>{moment(selectedData.last_updated).format("LLLL")}</p>
    </div>
  );
};
export default SelectedCoinHeader;
