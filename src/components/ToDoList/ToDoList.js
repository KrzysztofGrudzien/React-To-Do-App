import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = ({ toDoLists, setToDoLists }) => {
  return (
    <div className="todo-wrapper">
      <ul className="todo-list">
        {toDoLists.map(toDoList => (
          <ToDoItem
            key={toDoList.id}
            id={toDoList.id}
            text={toDoList.text}
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
