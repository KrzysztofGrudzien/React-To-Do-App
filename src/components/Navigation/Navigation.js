import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <Router>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">
              <i class="fas fa-columns"></i>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/projects">
              <i class="fas fa-folder-open"></i>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/clients">
              <i class="fas fa-user-plus"></i>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/tasks">
              <i class="fas fa-tasks"></i>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/statistics">
              <i class="fas fa-chart-line"></i>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/settings">
              <i class="fas fa-user-cog"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navigation;
