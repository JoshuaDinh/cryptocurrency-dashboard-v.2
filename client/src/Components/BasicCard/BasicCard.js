import React from "react";
import "./basicCard.css";
import { Link } from "react-router-dom";
import { determineColor } from "Utilities/Utilities";

const BasicCard = ({
  image,
  title,
  percentage,
  operator,
  current_price,
  setSelectedCoin,
}) => {
  return (
    <Link to="/" exact className="basic-card">
      <div className="basic-card-top">
        <img src={image} alt="" className="basic-card-image" />
        <h2>{title}</h2>
      </div>
      <h2>{current_price}</h2>
      <div className="basic-card-bottom">
        <h3 className={determineColor(percentage)}>
          {/* Determines if we should display a positive symbol for the percentage change / negative symbol is provided by api */}
          {percentage > 0 && <span>{operator}</span>}
          {percentage}%
        </h3>
      </div>
    </Link>
  );
};

export default BasicCard;
