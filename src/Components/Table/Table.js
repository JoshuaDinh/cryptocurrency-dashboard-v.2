import React from "react";
import "./table.css";

const Table = () => {
  return (
    <table className="table">
      <table>
        <thead>
          <tr>
            <th className="table-column">#</th>
            <th className="table-column">Name</th>
            <th className="table-column">Symbol</th>
            <th className="table-column">Price</th>
            <th className="table-column">High</th>
            <th className="table-column">Low</th>
            <th className="table-column">%</th>
            <th className="table-column">Supply</th>
            <th className="table-column">Volume</th>
            <th className="table-column">Market Cap</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr className="tableRow">
            <td className="table-column">#</td>
            <td className="table-column">Name</td>
            <td className="table-column ">
              <img className="coinSymbol" src="" alt="" />
            </td>
            <td className="table-column">Price</td>
            <td className="table-column dailyHigh ">High</td>
            <td className="table-column dailyLow ">Low</td>
            <td>%</td>
            <td className="table-column">supply</td>
            <td className="table-column">volume</td>
            <td className="table-column">market</td>
          </tr>
          <tr className="tableRow">
            <td className="table-column">#</td>
            <td className="table-column">Name</td>
            <td className="table-column ">
              <img className="coinSymbol" src="" alt="" />
            </td>
            <td className="table-column">Price</td>
            <td className="table-column dailyHigh ">High</td>
            <td className="table-column dailyLow ">Low</td>
            <td>%</td>
            <td className="table-column">supply</td>
            <td className="table-column">volume</td>
            <td className="table-column">market</td>
          </tr>
          <tr className="tableRow">
            <td className="table-column">#</td>
            <td className="table-column">Name</td>
            <td className="table-column ">
              <img className="coinSymbol" src="" alt="" />
            </td>
            <td className="table-column">Price</td>
            <td className="table-column dailyHigh ">High</td>
            <td className="table-column dailyLow ">Low</td>
            <td>%</td>
            <td className="table-column">supply</td>
            <td className="table-column">volume</td>
            <td className="table-column">market</td>
          </tr>
        </tbody>
      </table>
    </table>
  );
};

export default Table;
