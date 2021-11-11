import React from "react";
import "./transactions.css";

const Transactions = () => {
  return (
    <div className="transactions">
      <table>
        <thead className="transactions-header">
          <tr>
            <th>Type</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Created at</th>
            <th>Network</th>
          </tr>
        </thead>
        <tbody>
          <tr className="transactions-row">
            <td>Send</td>
            <td className="green">Completed</td>
            <td>-0.00100000 BTC </td>
            <td>2015-03-11T13:13:35-07:00</td>
            <td>off_blockchain</td>
          </tr>
          <tr>
            <td>Send</td>
            <td className="green">Completed</td>
            <td>-0.00100000 BTC </td>
            <td>2015-03-11T13:13:35-07:00</td>
            <td>off_blockchain</td>
          </tr>
          <tr>
            <td>Send</td>
            <td className="green">Completed</td>
            <td>-0.00100000 BTC </td>
            <td>2015-03-11T13:13:35-07:00</td>
            <td>off_blockchain</td>
          </tr>
          <tr className="transactions-row">
            <td>Send</td>
            <td className="green">Completed</td>
            <td>-0.00100000 BTC </td>
            <td>2015-03-11T13:13:35-07:00</td>
            <td>off_blockchain</td>
          </tr>
          <tr>
            <td>Send</td>
            <td className="green">Completed</td>
            <td>-0.00100000 BTC </td>
            <td>2015-03-11T13:13:35-07:00</td>
            <td>off_blockchain</td>
          </tr>
          <tr>
            <td>Send</td>
            <td className="green">Completed</td>
            <td>-0.00100000 BTC </td>
            <td>2015-03-11T13:13:35-07:00</td>
            <td>off_blockchain</td>
          </tr>
          <tr className="transactions-row">
            <td>Send</td>
            <td className="green">Completed</td>
            <td>-0.00100000 BTC </td>
            <td>2015-03-11T13:13:35-07:00</td>
            <td>off_blockchain</td>
          </tr>
          <tr>
            <td>Send</td>
            <td className="green">Completed</td>
            <td>-0.00100000 BTC </td>
            <td>2015-03-11T13:13:35-07:00</td>
            <td>off_blockchain</td>
          </tr>
          <tr>
            <td>Send</td>
            <td className="green">Completed</td>
            <td>-0.00100000 BTC </td>
            <td>2015-03-11T13:13:35-07:00</td>
            <td>off_blockchain</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
