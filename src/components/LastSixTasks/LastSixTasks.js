import React from "react";
import { Link } from "react-router-dom";
import "./LastSixTasks.scss";
import ImgAvatar from "../../assets/images/author.jpg";

const LastSixTasks = ({ toDoLists }) => {
  return (
    <div className="tasks-wrapper">
      <h2 className="last-tasks-title">
        {toDoLists.length > 0 ? "Last tasks" : "No tasks to do"}
      </h2>
      <div className="last-tasks-wrapper">
        {toDoLists
          .slice(toDoLists.length - 6, toDoLists.length + 1)
          .map(toDo => (
            <article className="last-task-wrapper">
              <div className="last-task">
                <img
                  src={ImgAvatar}
                  alt="author"
                  className="last-task-avatar"
                />
                <div className="last-task-info">
                  <span className="last-task-info-date">{toDo.date}</span>
                  <span className="last-task-info-subtasks">
                    Subtasks - 3/5
                  </span>
                </div>
              </div>
              <h3 className="last-task-title">{toDo.text}</h3>
            </article>
          ))}
      </div>
      {toDoLists.length > 0 ? (
        <Link to="/tasks" className="btn btn-primary">
          all tasks <i class="fas fa-arrow-right"></i>
        </Link>
      ) : null}
    </div>
  );
};

export default LastSixTasks;
