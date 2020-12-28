import React from "react";
import "./ToDoItem.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

const Priority = styled.span`
  background-color: ${({ type }) =>
    type === "high"
      ? "#ff3e6a"
      : type === "medium"
      ? "#ffac3e"
      : type === "low"
      ? "#24c770"
      : "#4c74f8"};
  color: #ffffff;
  height: 100%;
  display: inline-block;
  text-align: center;
  margin: 5px 0;
  margin-right: 5px;
  padding: 15px;
  min-width: 200px;
`;

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
  date,
  priority,
  author,
  comment,
  project,
  client
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
      <div className="todo-item-label">
        <div className="todo-item-status">STATUS</div>
        <div className="todo-item-task">TASK</div>
        <div className="todo-item-date">DEADLINE</div>
        <div className="todo-item-author">AUTHOR</div>
      </div>
      <div className="todo-item-content">
        <div className="todo-item-status">
          <span
            className={`todo-item-status-check ${
              toDo.completed ? "completed" : ""
            }`}
          >
            {""}
          </span>
        </div>
        <div className={`todo-item-task ${toDo.completed ? "done" : ""}`}>
          {text}
        </div>
        <div className={`todo-item-date ${toDo.completed ? "done" : ""}`}>
          {date}
        </div>
        <div className={`todo-item-author ${toDo.completed ? "done" : ""}`}>
          {author}
        </div>
      </div>
      <div className="todo-item-label">
        <div className="todo-item-client">CLIENT</div>
        <div className="todo-item-project">PROJECT</div>
        <div className="todo-item-time">TIME NEDEED</div>
        <div className="todo-item-priority">PRIORITY</div>
      </div>
      <div className="todo-item-content">
        <div className={`todo-item-client ${toDo.completed ? "done" : ""}`}>
          {client}
        </div>
        <div className={`todo-item-project ${toDo.completed ? "done" : ""}`}>
          {project}
        </div>
        <div
          className={`todo-item-time ${toDo.completed ? "done" : ""}`}
          onClick={handleOnClickSetTime}
        >
          {hours}h {minutes}min {seconds}sec
        </div>

        <Priority
          className={`todo-item-priority ${toDo.completed ? "done" : ""}`}
          type={priority}
        >
          {priority}
        </Priority>
      </div>
      <div className="todo-item-label">
        <div className="todo-item-note">NOTE</div>
        <div className="todo-item-comment">COMMENT</div>
        <div className="todo-item-subtasks">SUBTASKS</div>
      </div>
      <div className="todo-item-content">
        <div
          className={`todo-item-note todo-item-note-text ${
            toDo.completed ? "done" : ""
          }`}
        >
          {note}
        </div>
        <div
          className={`todo-item-comment todo-item-comment-text ${
            toDo.completed ? "done" : ""
          }`}
        >
          {comment}
        </div>
        <div className="todo-item-subtasks todo-item-subtasks-list">
          <ul className={`${toDo.completed ? "done" : ""}`}>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
            <li>item 7</li>
          </ul>
        </div>
      </div>
      <div className="todo-item-buttons">
        <button
          onClick={handleOnClickCompleteTask}
          className="btn btn-complete"
        />
        <button className="btn btn-edit" />
        <button onClick={handleOnClickDeleteTask} className="btn" />
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
