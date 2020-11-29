import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.scss";

const ToDoList = ({ toDoLists, setToDoLists }) => {
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
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
