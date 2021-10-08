import React from "react";
import "./basicCard.css";
import { determineColor } from "Utilities/Utilities";

const BasicCard = ({ image, title, data, operator }) => {
  return (
    <div className="basic-card">
      <div className="basic-card-top">
        <img src={image} alt="" className="basic-card-image" />
        <h2>{title}</h2>
      </div>
      <div className="basic-card-bottom">
        <h2 className={determineColor(data)}>
          <span>{operator}</span>
          {data}%
        </h2>
      </div>
    </div>
  );
};

export default BasicCard;
