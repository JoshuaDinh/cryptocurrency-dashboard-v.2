import React from "react";
import "./link.css";
import { NavLink } from "react-router-dom";

const Link = ({ title, link, secondaryButton }) => {
  return (
    <NavLink
      to={link}
      className={`link ${secondaryButton && "secondary-link"}`}
    >
      {title}
    </NavLink>
  );
};

export default Link;
