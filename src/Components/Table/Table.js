import React from "react";
import "./table.css";
import { format, formatShortened } from "Utilities/Utilities";

const Table = ({ coinList, setSelectedCoin }) => {
  function renderTable(coinList, setSelectedCoin) {
    return coinList.map((coin) => {
      return (
        <tr key={coin.name} onClick={() => setSelectedCoin(coin.id)}>
          <td>{coin.market_cap_rank}</td>
          <td>{coin.name}</td>{" "}
          <td className="table-column">
            <img className="table-coin-img" src={coin.image} alt="" />
          </td>
          <td>{format(coin.current_price)}</td>
          <td>{formatShortened(coin.total_supply)}</td>
          <td>{formatShortened(coin.total_volume)}</td>
          <td>{formatShortened(coin.market_cap)}</td>
        </tr>
      );
    });
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr className="row">
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Supply</th>
            <th>Volume</th>
            <th>Market-Cap</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {renderTable(coinList, setSelectedCoin)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
