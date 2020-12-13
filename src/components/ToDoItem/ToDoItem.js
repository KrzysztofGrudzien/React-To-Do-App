import React from "react";
import "./ToDoItem.scss";
import PropTypes from "prop-types";

const ToDoItem = ({
  text,
  id,
  toDoLists,
  setToDoLists,
  toDo,
  note,
  hours,
  minutes,
  seconds,
  setTime,
  date
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

  const handleOnClickSetTime = () => {
    setTime(seconds + minutes * 60 + hours * 60 * 60);
  };

  return (
    <li className="todo-item">
      <article className="todo-item-article">
        <span
          className={`todo-item-done ${toDo.completed ? "completed" : ""}`}
        ></span>
        <h4 className={`todo-item-title ${toDo.completed ? "done" : ""}`}>
          {text}
        </h4>
        <span className={`todo-item-date ${toDo.completed ? "done" : ""}`}>
          {date}
        </span>
        <span
          className={`todo-item-work-time ${toDo.completed ? "done" : ""}`}
          title="Click and setup time above"
          onClick={!toDo.completed ? handleOnClickSetTime : null}
        >
          {hours}h {minutes}min {seconds}sec
        </span>

        <p className={`todo-item-note ${toDo.completed ? "done" : ""}`}>
          {note}
        </p>
      </article>
      <div className="todo-item-actions">
        <button
          onClick={handleOnClickCompleteTask}
          className="btn btn-complete"
        />
        <button onClick={handleOnClickDeleteTask} className="btn" />
        <button className="btn btn-edit" />
      </div>
    </li>
  );
};

ToDoItem.propTypes = {
  text: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toDoLists: PropTypes.array.isRequired,
  setToDoLists: PropTypes.func.isRequired,
  toDo: PropTypes.any
};

export default ToDoItem;
