import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = () => {
  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ul>
    </div>
  );
};

export default ToDoList;
