import React from "react";
import "./link.css";
import { NavLink } from "react-router-dom";

const Link = ({ title, link, dark }) => {
  return (
    <NavLink to={link} className={`link ${dark && "dark-link"}`}>
      {title}
    </NavLink>
  );
};

export default Link;
