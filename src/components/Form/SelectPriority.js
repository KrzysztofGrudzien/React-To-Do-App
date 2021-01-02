import React from "react";
import "./Form.scss";
import CONSTANT from "../../utils/constant";

const SelectPriority = ({ setPriority }) => {
  const handleOnChangeSelectPriorityType = e => {
    setPriority(e.target.value);
  };
  return (
    <select className="todo-select" onChange={handleOnChangeSelectPriorityType}>
      <option value={CONSTANT.PRIORITY.ALL}>All Prorities</option>
      <option value={CONSTANT.PRIORITY.LOW}>Low</option>
      <option value={CONSTANT.PRIORITY.MEDIUM}>Medium</option>
      <option value={CONSTANT.PRIORITY.HIGH}>High</option>
    </select>
  );
};

export default SelectPriority;
