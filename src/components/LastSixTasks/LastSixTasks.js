import React from "react";
import { Link } from "react-router-dom";
import "./LastSixTasks.scss";
import ImgAvatar from "../../assets/images/author.jpg";
import ImgAvatarRambo from "../../assets/images/rambo.png";
import ImgAvatarBill from "../../assets/images/kill-bill.jpg";
import ImgAvatarLecter from "../../assets/images/hannibal.jpg";
import ImgAvatarLeon from "../../assets/images/leon.jpg";
import ImgAvatarWick from "../../assets/images/johnny-wick.jpg";
import CONSTANT from "../../utils/constant";

const LastSixTasks = ({ toDoLists }) => {
  return (
    <div className="tasks-wrapper">
      <h2 className="last-tasks-title">
        {toDoLists.length > 0 ? "LAST TASKS" : "NO TASKS TO DO"}
      </h2>
      <div className="last-tasks-wrapper">
        {toDoLists
          .slice(
            toDoLists.length > 6 ? toDoLists.length - 6 : 0,
            toDoLists.length + 1
          )
          .map(toDo => (
            <article className="last-task-wrapper">
              <div className="last-task">
                <div className="last-task-author">
                  <span
                    className={`last-task-notification-sign ${
                      toDo.priority === CONSTANT.PRIORITY.HIGH
                        ? "last-task-notification-sign-red"
                        : toDo.priority === CONSTANT.PRIORITY.MEDIUM
                        ? "last-task-notification-sign-orange"
                        : toDo.priority === CONSTANT.PRIORITY.LOW
                        ? "last-task-notification-sign-green"
                        : ""
                    } `}
                  />
                  <img
                    src={
                      toDo.author === CONSTANT.AUTHOR.RAMBO
                        ? ImgAvatarRambo
                        : toDo.author === CONSTANT.AUTHOR.HANNIBAL
                        ? ImgAvatarLecter
                        : toDo.author === CONSTANT.AUTHOR.BILL
                        ? ImgAvatarBill
                        : toDo.author === CONSTANT.AUTHOR.WICK
                        ? ImgAvatarWick
                        : toDo.author === CONSTANT.AUTHOR.LEON
                        ? ImgAvatarLeon
                        : ImgAvatar
                    }
                    alt="author"
                    className="last-task-avatar"
                  />
                  <span className="last-task-author-name">{toDo.author}</span>
                </div>
                <div className="last-task-info">
                  <span className="last-task-info-date">{toDo.date}</span>
                  <span className="last-task-info-subtasks">
                    Subtasks - 3/5
                  </span>
                </div>
              </div>

              <h3 className="last-task-title">{toDo.text}</h3>
              <p className="last-task-client">
                Client: <span className="bold">{toDo.client}</span>
              </p>
              <p className="last-task-title-project">
                Project: <span className="bold">{toDo.project}</span>
              </p>
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
