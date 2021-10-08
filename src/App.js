import React from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Views/Dashboard/Dashboard";
import Home from "./Views/Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
