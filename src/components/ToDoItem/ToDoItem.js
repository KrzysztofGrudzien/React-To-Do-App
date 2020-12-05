import React from "react";
import "./ToDoItem.scss";
import Images from "../../data/Images";
import PropTypes from "prop-types";

const ToDoItem = ({
  text,
  id,
  toDoLists,
  setToDoLists,
  toDo,
  randomImg,
  note
}) => {
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
            src={Images[randomImg]}
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
        <p className="todo-item-note">{note}</p>
      </article>
    </li>
  );
};

ToDoItem.propTypes = {
  text: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toDoLists: PropTypes.array.isRequired,
  setToDoLists: PropTypes.func.isRequired,
  toDo: PropTypes.any,
  randomImg: PropTypes.number.isRequired
};

export default ToDoItem;
