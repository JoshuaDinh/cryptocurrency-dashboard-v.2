import React from "react";
import "./basicCard.css";
import { determineColor } from "Utilities/Utilities";

const BasicCard = ({ image, title, percentage, operator, current_price }) => {
  return (
    <div className="basic-card">
      <div className="basic-card-top">
        <img src={image} alt="" className="basic-card-image" />
        <h2>{title}</h2>
      </div>
      <h2>{current_price}</h2>
      <div className="basic-card-bottom">
        <h3 className={determineColor(percentage)}>
          <span>{operator}</span>
          {percentage}%
        </h3>
      </div>
    </div>
  );
};

export default BasicCard;
