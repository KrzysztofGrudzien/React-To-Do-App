import React from "react";
import "./Summary.scss";
import countTasks from "../../utils/countTasks.js";
import countPercentOfTasks from "../../utils/countPercentOfTasks.js";
import PropTypes from "prop-types";

const Summary = ({ toDoLists }) => {
  const completed = countTasks("completed", toDoLists);
  const tasks = countTasks("all", toDoLists);
  const percent = countPercentOfTasks(completed, tasks);

  return (
    <section className="summary">
      <h2 className="summary-title">Statistics tasks</h2>
      <div className="progress-bar">
        <span className="progress-bar-percent-total">{percent}</span>
        <span className="progress-bar-number-total">
          {completed}/{tasks}
        </span>
        <div
          className="progress-bar-percent"
          style={{ height: `${percent}`, zIndex: 10 }}
        ></div>
      </div>
      <div className="summary-cases">
        Cases
        <ul className="summary-list">
          <li className="summary-list-item">
            <div className="summary-cases-title">Completed Tasks</div>
            <div className="summary-amount">
              {countTasks("completed", toDoLists)}
            </div>
          </li>
          <li className="summary-list-item">
            <div className="summary-cases-title">To Do Tasks</div>
            <div className="summary-amount">
              {countTasks("uncompleted", toDoLists)}
            </div>
          </li>
          <li className="summary-list-item">
            <div className="summary-cases-title">All Tasks</div>
            <div className="summary-amount">{countTasks("all", toDoLists)}</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

Summary.propTypes = {
  toDoLists: PropTypes.array.isRequired
};

export default Summary;
