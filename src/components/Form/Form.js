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
      <h2>
        TASK <b>TO DO</b>
      </h2>
      <div className="todo-filter-wrapper">
        <input
          type="text"
          className="todo-input"
          onChange={handleOnChangeInputValue}
          value={inputValue}
          placeholder="Enter a todo task"
        />
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
      <textarea
        type="text"
        className="todo-input"
        value=""
        placeholder="Enter a note to this task"
      />
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
