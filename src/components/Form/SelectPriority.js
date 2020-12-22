import React from "react";
import "./Form.scss";

const SelectPriority = ({ setCategory }) => {
  const handleOnChangeSelectCategoryType = e => {
    setCategory(e.target.value);
  };
  return (
    <select className="todo-select" onChange={handleOnChangeSelectCategoryType}>
      <option value="all">All Prorities</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default SelectPriority;
