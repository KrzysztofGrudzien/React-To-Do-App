import React from "react";
import "./SummaryPriority.scss";
import CONSTANT from "../../utils/constant";

const SummaryPriority = ({ toDoLists }) => {
  const summaryPriority = priority => {
    if (priority === CONSTANT.PRIORITY.LOW) {
      const priorities = toDoLists.filter(
        toDo => toDo.priority === CONSTANT.PRIORITY.LOW
      );
      return priorities.length;
    } else if (priority === CONSTANT.PRIORITY.MEDIUM) {
      const priorities = toDoLists.filter(
        toDo => toDo.priority === CONSTANT.PRIORITY.MEDIUM
      );
      return priorities.length;
    } else if (priority === CONSTANT.PRIORITY.HIGH) {
      const priorities = toDoLists.filter(
        toDo => toDo.priority === CONSTANT.PRIORITY.HIGH
      );
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
          {summaryPriority(CONSTANT.PRIORITY.LOW)}
        </div>
      </div>
      <div className="summary-priority">
        <h3 className="summary-priority-title">Medium</h3>
        <div className="summary-priority-color summary-priority-color-orange">
          {summaryPriority(CONSTANT.PRIORITY.MEDIUM)}
        </div>
      </div>
      <div className="summary-priority">
        <h3 className="summary-priority-title">High</h3>
        <div className="summary-priority-color summary-priority-color-red">
          {summaryPriority(CONSTANT.PRIORITY.HIGH)}
        </div>
      </div>
    </div>
  );
};

export default SummaryPriority;
