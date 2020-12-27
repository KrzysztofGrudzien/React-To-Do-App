import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.scss";
import PropTypes from "prop-types";
import styled from "styled-components";

const TitleToDoList = styled.h3`
  background-color: ${props =>
    props.web
      ? "#24c770"
      : props.eng
      ? "#e11bda"
      : props.vr
      ? "#d2d820"
      : props.mark
      ? "#ff3e6a"
      : props.home
      ? "#ec7a17"
      : "#4c74f8"};
  color: #f9feff;
  font-size: 2rem;
  font-weight: 600;
  height: 70px;
  line-height: 7rem;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;

const ToDoList = ({
  toDoLists,
  setToDoLists,
  filteredToDoLists,
  filteredToDoListsPriority,
  filter,
  category,
  setTime
}) => {
  const filterType =
    filter === "category" ? filteredToDoLists : filteredToDoListsPriority;

  return (
    <div className="todo-list-wrapper">
      {filter !== "priority" ? (
        <div>
          {category === "webdesign" ? (
            <TitleToDoList web>Webdesign</TitleToDoList>
          ) : category === "vr" ? (
            <TitleToDoList vr>Vr / 3D Development</TitleToDoList>
          ) : category === "english" ? (
            <TitleToDoList eng>English</TitleToDoList>
          ) : category === "marketing" ? (
            <TitleToDoList mark>Marketing</TitleToDoList>
          ) : category === "home" ? (
            <TitleToDoList home>Home duties</TitleToDoList>
          ) : category === "development" ? (
            <TitleToDoList dev>Development</TitleToDoList>
          ) : (
            <TitleToDoList>All tasks</TitleToDoList>
          )}
        </div>
      ) : null}
      <ul className="todo-list">
        {filterType.map(toDoList => (
          <ToDoItem
            key={toDoList.id}
            id={toDoList.id}
            text={toDoList.text}
            setToDoLists={setToDoLists}
            toDoLists={toDoLists}
            toDo={toDoList}
            category={toDoList.category}
            note={toDoList.note}
            hours={toDoList.hours}
            minutes={toDoList.minutes}
            seconds={toDoList.seconds}
            setTime={setTime}
            date={toDoList.date}
            priority={toDoList.priority}
            author={toDoList.author}
            comment={toDoList.comment}
          />
        ))}
      </ul>
    </div>
  );
};

ToDoList.propTypes = {
  toDoLists: PropTypes.array.isRequired,
  setToDoLists: PropTypes.func.isRequired
};

export default ToDoList;
