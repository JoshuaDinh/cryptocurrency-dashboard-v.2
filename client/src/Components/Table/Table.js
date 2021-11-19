import React from "react";
import "./table.css";
import { format, formatShortened } from "Utilities/Utilities";

const Table = ({ coinList, setSelectedCoin, selectedCoin }) => {
  function renderTable(coinList, setSelectedCoin) {
    return coinList.map((coin) => {
      // Function scrolls to top of page when item is clicked alllowing users to see the data on the new selected coin
      function selectAndScroll() {
        setSelectedCoin(coin.id);
        window.scrollTo(0, 0);
      }
      return (
        <tr
          className={selectedCoin === coin.id && "table-selected-row"}
          key={coin.name}
          onClick={() => selectAndScroll(coin.id)}
        >
          <td>{coin.name}</td>
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
    <table className="table-container">
      <thead className="table">
        <tr className="row">
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
  );
};

export default Table;
