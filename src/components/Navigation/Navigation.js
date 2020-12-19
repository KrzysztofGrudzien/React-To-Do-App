import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <i class="fas fa-columns"></i>
        </li>
        <li className="nav-list-item">
          <i class="fas fa-folder-open"></i>
        </li>
        <li className="nav-list-item">
          <i class="fas fa-user-plus"></i>
        </li>
        <li className="nav-list-item">
          <i class="fas fa-tasks"></i>
        </li>
        <li className="nav-list-item">
          <i class="fas fa-chart-line"></i>
        </li>
        <li className="nav-list-item">
          <i class="fas fa-user-cog"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
