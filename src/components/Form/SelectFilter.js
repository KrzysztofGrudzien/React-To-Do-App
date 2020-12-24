import React from "react";
import "./Form.scss";

const SelectFilter = ({ setFilter, setCategory, setPriority }) => {
  const handleOnChangeSelectFilter = e => {
    setFilter(e.target.value);
    setCategory("all");
    setPriority("all");
  };
  return (
    <select className="todo-select" onChange={handleOnChangeSelectFilter}>
      <option value="category">Category</option>
      <option value="priority">Priority</option>
    </select>
  );
};

export default SelectFilter;
