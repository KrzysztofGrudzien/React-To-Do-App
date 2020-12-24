import React from "react";
import "./Form.scss";

const SelectPriority = ({ setPriority }) => {
  const handleOnChangeSelectPriorityType = e => {
    setPriority(e.target.value);
  };
  return (
    <select className="todo-select" onChange={handleOnChangeSelectPriorityType}>
      <option value="all">All Prorities</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default SelectPriority;
