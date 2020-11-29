import React from "react";
import "./Form.scss";

const Form = ({
  setInputValue,
  setToDoLists,
  toDoLists,
  inputValue,
  setStatus
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
        completed: false,
        id: Math.floor(Math.random() * 1000)
      }
    ]);
    setInputValue("");
  };

  const handleOnChangeSelectStatus = e => {
    setStatus(e.target.value);
  };

  return (
    <form className="todo-form">
      <h2 className="todo-form-title">
        TASK <b>TO DO</b>
      </h2>
      <div className="todo-form-wrapper">
        <input
          type="text"
          className="todo-input"
          onChange={handleOnChangeInputValue}
          value={inputValue}
          placeholder="Enter a todo task"
        />
        <select className="todo-select" onChange={handleOnChangeSelectStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <textarea
        type="text"
        className="todo-textarea"
        value=""
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
              value="home"
            />
            Home Duties
          </label>
        </div>
      </div>
      <button
        className="todo-button"
        type="submit"
        onClick={handleOnClickSubmit}
      >
        add task
      </button>
    </form>
  );
};

export default Form;
