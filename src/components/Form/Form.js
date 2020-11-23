import React from "react";

const Form = ({ setInputValue }) => {
  const handleOnChangeInputValue = e => {
    setInputValue(e.target.value);
  };
  return (
    <form className="todo-form">
      <input
        type="text"
        className="todo-input"
        onChange={handleOnChangeInputValue}
      />
      <button className="todo-button" type="submit">
        add task
      </button>
      <div className="todo-filter-wrapper">
        <select className="todo-select" className="todo-filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;