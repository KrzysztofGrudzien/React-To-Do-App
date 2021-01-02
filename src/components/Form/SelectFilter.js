import React from "react";
import "./AddClientForm/AddClientForm.scss";
import CONSTANT from "../../utils/constant";

const SelectFilter = ({ setFilter, setCategory, setPriority }) => {
  const handleOnChangeSelectFilter = e => {
    setFilter(e.target.value);
    setCategory(CONSTANT.CATEGORY.ALL);
    setPriority(CONSTANT.PRIORITY.ALL);
  };
  return (
    <select className="todo-select" onChange={handleOnChangeSelectFilter}>
      <option value={CONSTANT.FILTER.CATEGORY}>Category</option>
      <option value={CONSTANT.FILTER.PRIORITY}>Priority</option>
    </select>
  );
};

export default SelectFilter;
