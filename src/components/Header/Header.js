import React from "react";
import UserLoginInfo from "../UserLoginInfo/UserLoginInfo";
import "./Header.scss";
import CONSTANT from "../../utils/constant";

const Header = ({ time, isActive, toDoLists, startTime, resetTime }) => {
  let updateMinutes, updateSeconds, updateHours;

  updateHours = Math.floor(time / 3600);
  updateMinutes = Math.floor(time / 60) % 60;
  updateSeconds = time % 60;

  return (
    <header className="app-header">
      <h1 className="app-header-title">
        TASK MANAGER <strong>for Everyone</strong>
      </h1>
      <div className="app-timer">
        <span className="app-timer-time">
          {updateHours < 10 ? `0${updateHours}` : updateHours} :{" "}
          {updateMinutes < 10 ? `0${updateMinutes}` : updateMinutes} :{" "}
          {updateSeconds < 10 ? `0${updateSeconds}` : updateSeconds}
        </span>
        <div className="app-timer-btn-group">
          <button
            onClick={startTime}
            className={!isActive ? "app-timer-btn active" : "app-timer-btn"}
            disabled={toDoLists.length < 1 ? true : false}
          >
            {isActive ? CONSTANT.TIMER.START : CONSTANT.TIMER.PAUSE}
          </button>
          <button
            onClick={resetTime}
            className="app-timer-btn"
            disabled={!isActive}
          >
            reset
          </button>
        </div>
      </div>
      <UserLoginInfo />
    </header>
  );
};

export default Header;
