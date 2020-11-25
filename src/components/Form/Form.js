import React from "react";

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
      <input
        type="text"
        className="todo-input"
        onChange={handleOnChangeInputValue}
        value={inputValue}
      />
      <button
        className="todo-button"
        type="submit"
        onClick={handleOnClickSubmit}
      >
        add task
      </button>
      <div className="todo-filter-wrapper">
        <select
          className="todo-select"
          className="todo-filter"
          onChange={handleOnChangeSelectStatus}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
