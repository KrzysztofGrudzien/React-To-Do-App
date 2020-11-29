import React from "react";
import "./ToDoItem.scss";
import DeerImg from "../../assets/images/deer.png";

const ToDoItem = ({ text, id, toDoLists, setToDoLists, toDo, randomImg }) => {
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
    <li className="todo-item">
      <article className="todo-item-article">
        <span
          className={`todo-item-done ${toDo.completed ? "completed" : ""}`}
        ></span>
        <h4 className="todo-item-title">{text}</h4>
        <span className="todo-item-date">26/11/2020 at 8:00 p.m</span>
        <div className="todo-item-action-wrapper">
          <img
            src={DeerImg}
            alt="random image"
            className={`todo-item-image ${toDo.completed ? "opacity" : ""}`}
          />
          <div className="todo-item-actions">
            <button
              onClick={handleOnClickCompleteTask}
              className="btn btn-complete"
            />
            <button onClick={handleOnClickDeleteTask} className="btn" />
          </div>
        </div>
        <p className="todo-item-note">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          itaque animi hic. Eius voluptate praesentium asperiores enim
          aspernatur! Magnam distinctio minima dolores soluta nostrum dolor
          doloremque, vitae fugit vero iste. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Dolores itaque animi hic. Eius voluptate
          praesentium asperiores enim aspernatur! Magnam distinctio minima
          dolores soluta nostrum dolor doloremque, vitae fugit vero iste. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Dolores itaque
          animi hic. Eius voluptate praesentium asperiores enim aspernatur!
          Magnam distinctio minima dolores soluta nostrum dolor doloremque,
          vitae fugit vero iste. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolores itaque animi hic. Eius voluptate praesentium
          asperiores enim aspernatur! Magnam distinctio minima dolores soluta
          nostrum dolor doloremque, vitae fugit vero iste.
        </p>
      </article>
    </li>
  );
};

export default ToDoItem;
