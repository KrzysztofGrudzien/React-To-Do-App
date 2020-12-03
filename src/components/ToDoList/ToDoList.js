import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.scss";
import PropTypes from "prop-types";

const ToDoList = ({
  toDoLists,
  setToDoLists,
  setCategory,
  setTextAreaValue
}) => {
  return (
    <div className="todo-list-wrapper">
      <h3 className="todo-list-title">Development</h3>
      <ul className="todo-list">
        {toDoLists.map(toDoList => (
          <ToDoItem
            key={toDoList.id}
            id={toDoList.id}
            text={toDoList.text}
            randomImg={toDoList.randomImg}
            setToDoLists={setToDoLists}
            toDoLists={toDoLists}
            toDo={toDoList}
            category={toDoList.category}
            note={toDoList.note}
          />
        ))}
      </ul>
    </div>
  );
};

ToDoList.propTypes = {
  toDoLists: PropTypes.array.isRequired,
  setToDoLists: PropTypes.func.isRequired
};

export default ToDoList;
