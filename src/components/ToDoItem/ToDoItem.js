import React from "react";
import DeerImg from "../../assets/images/deer.png";

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
      <article>
        <span></span>
        <h4>{text}</h4>
        <div>
          <img src={DeerImg} alt="random image" />
          <div>
            <button onClick={handleOnClickCompleteTask} className="complete" />
            <button onClick={handleOnClickDeleteTask} className="delete" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          itaque animi hic. Eius voluptate praesentium asperiores enim
          aspernatur! Magnam distinctio minima dolores soluta nostrum dolor
          doloremque, vitae fugit vero iste.
        </p>
      </article>
    </li>
  );
};

export default ToDoItem;
