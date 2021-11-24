import React from "react";
import "./sideNavigation.css";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LoginIcon from "@mui/icons-material/Login";
import WaterfallChartOutlinedIcon from "@mui/icons-material/WaterfallChartOutlined";
const SideNavigation = () => {
  return (
    <nav className="side-nav">
      <div className="side-nav-container">
        <NavLink
          activeClassName="side-nav-active"
          to="/"
          exact
          className="side-nav-link"
        >
          <DashboardIcon />
        </NavLink>
        <NavLink
          activeClassName="side-nav-active"
          to="/User-Verified"
          className="side-nav-link"
        >
          <AccountBalanceIcon />
        </NavLink>
        <NavLink
          activeClassName="side-nav-active"
          to="/nft"
          className="side-nav-link"
        >
          <span>-NFT-</span>
        </NavLink>
        <NavLink
          activeClassName="side-nav-active"
          to="/candle-stick"
          className="side-nav-link"
        >
          <WaterfallChartOutlinedIcon />
        </NavLink>
      </div>
      <a
        className="side-nav-coinbase"
        href="http://localhost:8080/api/oAuth/redirect"
      >
        <LoginIcon />
      </a>
    </nav>
  );
};

export default SideNavigation;
