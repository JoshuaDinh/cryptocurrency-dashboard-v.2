import React from "react";
import "./learnCard.css";

const LearnCard = ({ image, title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="learn-card">
      <img className="learn-card-image" src={image} alt="#" />
      <div className="learn-card-content">
        <span>Beginners Guide</span>
        <h1>What is {title}</h1>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default LearnCard;
