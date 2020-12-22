import React from "react";
import "./Form.scss";

const SelectCategory = ({ setCategory }) => {
  const handleOnChangeSelectCategoryType = e => {
    setCategory(e.target.value);
  };
  return (
    <select className="todo-select" onChange={handleOnChangeSelectCategoryType}>
      <option value="all">All Categories</option>
      <option value="development">Development</option>
      <option value="webdesign">Webdesign</option>
      <option value="english">English</option>
      <option value="vr">VR / 3D Development</option>
      <option value="marketing">Marketing</option>
      <option value="home">Home Duties</option>
    </select>
  );
};

export default SelectCategory;
