import React from "react";
import "./Form.scss";
import CONSTANT from "../../utils/constant";

const SelectCategory = ({ setCategory }) => {
  const handleOnChangeSelectCategoryType = e => {
    setCategory(e.target.value);
  };
  return (
    <select className="todo-select" onChange={handleOnChangeSelectCategoryType}>
      <option value={CONSTANT.CATEGORY.ALL}>All Categories</option>
      <option value={CONSTANT.CATEGORY.DEVELOPMENT}>Development</option>
      <option value={CONSTANT.CATEGORY.WEBDESIGN}>Webdesign</option>
      <option value={CONSTANT.CATEGORY.ENGLISH}>English</option>
      <option value={CONSTANT.CATEGORY.VR}>VR / 3D Development</option>
      <option value={CONSTANT.CATEGORY.MARKETING}>Marketing</option>
      <option value={CONSTANT.CATEGORY.HOME}>Home Duties</option>
    </select>
  );
};

export default SelectCategory;
