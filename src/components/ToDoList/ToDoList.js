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
  margin-top: 50px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;

const ToDoList = ({ toDoLists, setToDoLists, filteredToDoLists, category }) => {
  return (
    <div className="todo-list-wrapper">
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
      <ul className="todo-list">
        {filteredToDoLists.map(toDoList => (
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
          />
        ))}
      </ul>
    </div>
  );
};

ToDoList.propTypes = {
  toDoLists: PropTypes.array.isRequired,
  setToDoLists: PropTypes.func.isRequired,
  filteredToDoLists: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
};

export default ToDoList;
