import React from "react";

const ToDoItem = ({ text, id, toDoLists, setToDoLists, toDo }) => {
  const handleOnClickDeleteTask = () => {
    setToDoLists(toDoLists.filter(toDoItem => toDoItem.id !== id));
  };

  const handleOnClickCompleteTask = () => {
    setToDoLists(
      toDoLists.map(toDoItem => {
        if (toDoItem.id === id) {
          return {
            ...toDoItem,
            completed: !toDoItem.completed
          };
        }
        return toDoItem;
      })
    );
  };

  return (
    <li className={`todo-item ${toDo.completed ? "completed" : ""}`}>
      {text}
      <button onClick={handleOnClickCompleteTask}>complete</button>
      <button onClick={handleOnClickDeleteTask}>delete</button>
    </li>
  );
};

export default ToDoItem;
