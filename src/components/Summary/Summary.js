import React from "react";
import SummaryImg from "../../assets/images/summary-tasks.png";
import "./Summary.scss";
import countTasks from "../../utils/countTasks.js";
import countPercentOfTasks from "../../utils/countPercentOfTasks.js";

const Summary = ({ toDoLists }) => {
  const completed = countTasks("completed", toDoLists);
  const tasks = countTasks("all", toDoLists);

  return (
    <section className="summary">
      <h2 className="summary-title">Statistics tasks</h2>
      <img src={SummaryImg} alt="summary image" />
      <span>{countPercentOfTasks(completed, tasks)}</span>
      <span>
        {completed}/{tasks}
      </span>
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

export default Summary;
