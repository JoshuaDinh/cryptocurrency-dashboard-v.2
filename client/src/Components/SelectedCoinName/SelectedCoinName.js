import React from "react";
import "./selectedCoinName.css";
import moment from "moment";

const SelectedCoinName = ({ data }) => {
  console.log(data);
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
// const SelectedCoinName = ({ coinList, selectedCoin }) => {
//   function renderCoinName() {
//     for (let coin of coinList) {
//       if (coin.id === selectedCoin) {
//         return (
//           <>
//             <img src={coin.image} alt="" className="selected-coin-image" />
//             <h1>{coin.name}</h1>
//             <h2>({coin.symbol})</h2>
//             <p>{moment(coin.last_updated).format("LLLL")}</p>
//           </>
//         );
//       }
//     }
//   }
//   return <div className="selected-coin-name">{renderCoinName()} </div>;
// };
// export default SelectedCoinName;
