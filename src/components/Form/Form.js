import React from "react";
import "./Form.scss";
import randomNumber from "../../utils/randomNumber.js";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Form = ({
  setInputValue,
  setToDoLists,
  toDoLists,
  inputValue,
  category,
  setCategory,
  textareaValue,
  setTextAreaValue
}) => {
  const handleOnChangeInputValue = e => {
    setInputValue(e.target.value);
  };

  const handleOnClickSubmit = e => {
    e.preventDefault();
    setToDoLists([
      ...toDoLists,
      {
        text: inputValue,
        note: textareaValue,
        completed: false,
        id: uuidv4(),
        randomImg: randomNumber(),
        category: category
      }
    ]);
    setInputValue("");
    setTextAreaValue("");
  };

  const handleOnChangeSelectCategoryType = e => {
    setCategory(e.target.value);
  };

  const handleOnChangeSelectCategory = e => {
    setCategory(e.target.value);
  };

  const handleOnChangeTextNote = e => {
    setTextAreaValue(e.target.value);
  };

  return (
    <form className="todo-form">
      <h2 className="todo-form-title">
        TASK <b>TO DO</b>
      </h2>
      <div className="todo-form-wrapper">
        <input
          type="text"
          className={`todo-input ${inputValue.length > 100 ? "invalid" : ""}`}
          onChange={handleOnChangeInputValue}
          value={inputValue}
          placeholder="Enter a todo task"
        />
        <select
          className="todo-select"
          onChange={handleOnChangeSelectCategoryType}
        >
          <option value="all">All</option>
          <option value="development">Development</option>
          <option value="webdesign">Webdesign</option>
          <option value="english">English</option>
          <option value="vr">VR / 3D Development</option>
          <option value="marketing">Marketing</option>
          <option value="home">Home Duties</option>
        </select>
      </div>
      <textarea
        type="text"
        className="todo-textarea"
        onChange={handleOnChangeTextNote}
        value={textareaValue}
        placeholder="Enter a note to this task"
      />
      <div className="todo-categories">
        <h2 className="todo-categories-title">PROJECTS CATEGORY</h2>
        <div className="todo-category">
          <label for="development">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="development"
              onChange={handleOnChangeSelectCategory}
              value="development"
            />
            Development
          </label>
        </div>
        <div className="todo-category">
          <label for="webdesign">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="webdesign"
              onChange={handleOnChangeSelectCategory}
              value="webdesign"
            />
            Webdesign
          </label>
        </div>
        <div className="todo-category">
          <label for="english">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="english"
              onChange={handleOnChangeSelectCategory}
              value="english"
            />
            English
          </label>
        </div>
        <div className="todo-category">
          <label for="vr">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="vr"
              onChange={handleOnChangeSelectCategory}
              value="vr"
            />
            VR / 3D Development
          </label>
        </div>
        <div className="todo-category">
          <label for="marketing">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="marketing"
              onChange={handleOnChangeSelectCategory}
              value="marketing"
            />
            Marketing
          </label>
        </div>
        <div className="todo-category">
          <label for="home">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="home"
              onChange={handleOnChangeSelectCategory}
              value="home"
            />
            Home Duties
          </label>
        </div>
      </div>
      <div className="todo-time">
        <h2 className="todo-time-title">TIME YOU NEED</h2>
        <div className="todo-time-wrapper">
          <label>Hours</label>
          <input type="number" min="0" className="todo-input-time" />
        </div>
        <div className="todo-time-wrapper">
          <label>Minutes</label>
          <input type="number" min="1" className="todo-input-time" />
        </div>
      </div>
      <button
        className="todo-button"
        type="submit"
        onClick={handleOnClickSubmit}
        disabled={inputValue.length < 1 ? true : false}
      >
        add task
      </button>
    </form>
  );
};

Form.propTypes = {
  setInputValue: PropTypes.func.isRequired,
  setToDoLists: PropTypes.func.isRequired,
  setTextAreaValue: PropTypes.func.isRequired,
  textareaValue: PropTypes.string.isRequired,
  toDoLists: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired
};

export default Form;
