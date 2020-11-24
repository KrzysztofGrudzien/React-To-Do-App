import React from "react";

const ToDoItem = ({ text, id, toDoLists, setToDoLists }) => {
  const handleOnClickDeleteTask = () => {
    setToDoLists(toDoLists.filter(toDoItem => toDoItem.id !== id));
  };

  return (
    <li>
      {text}
      <button>complete</button>
      <button onClick={handleOnClickDeleteTask}>delete</button>
    </li>
  );
};

export default ToDoItem;
