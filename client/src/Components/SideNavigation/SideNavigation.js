import React from "react";
import "./sideNavigation.css";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import TableViewIcon from "@mui/icons-material/TableView";
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
          <SearchIcon />
        </NavLink>
        <NavLink
          activeClassName="side-nav-active"
          to="/TopFive"
          exact
          className="side-nav-link"
        >
          <TableViewIcon />
        </NavLink>
        <NavLink
          activeClassName="side-nav-active"
          to="/DailyPercentages"
          exact
          className="side-nav-link"
        >
          <DashboardIcon />
        </NavLink>
      </div>
      {/* <a
        className="side-nav-coinbase"
        href="http://localhost:8080/api/oAuth/redirect"
      >
        <LoginIcon />
      </a> */}
    </nav>
  );
};

export default SideNavigation;
