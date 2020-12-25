import React from "react";
import "./SummaryPriority.scss";

const SummaryPriority = ({ toDoLists }) => {
  const summaryPriority = priority => {
    if (priority === "low") {
      const priorities = toDoLists.filter(toDo => toDo.priority === "low");
      return priorities.length;
    } else if (priority === "medium") {
      const priorities = toDoLists.filter(toDo => toDo.priority === "medium");
      return priorities.length;
    } else if (priority === "high") {
      const priorities = toDoLists.filter(toDo => toDo.priority === "high");
      return priorities.length;
    } else {
      return toDoLists.length;
    }
  };

  return (
    <div className="summary-priorities">
      <h2 className="summary-priorities-title">CURRENT PRIORITIES</h2>
      <div className="summary-priority">
        <h3 className="summary-priority-title">Low</h3>
        <div className="summary-priority-color summary-priority-color-green">
          {summaryPriority("low")}
        </div>
      </div>
      <div className="summary-priority">
        <h3 className="summary-priority-title">Medium</h3>
        <div className="summary-priority-color summary-priority-color-orange">
          {summaryPriority("medium")}
        </div>
      </div>
      <div className="summary-priority">
        <h3 className="summary-priority-title">High</h3>
        <div className="summary-priority-color summary-priority-color-red">
          {summaryPriority("high")}
        </div>
      </div>
    </div>
  );
};

export default SummaryPriority;
