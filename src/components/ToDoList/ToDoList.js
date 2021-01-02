import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDoList.scss";
import PropTypes from "prop-types";
import styled from "styled-components";
import CONSTANT from "../../utils/constant";

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
  height: 48px;
  line-height: 5rem;
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
    filter === CONSTANT.FILTER.CATEGORY
      ? filteredToDoLists
      : filteredToDoListsPriority;

  return (
    <div className="todo-list-wrapper">
      {filter !== CONSTANT.FILTER.PRIORITY ? (
        <div>
          {category === CONSTANT.CATEGORY.WEBDESIGN ? (
            <TitleToDoList web>Webdesign</TitleToDoList>
          ) : category === CONSTANT.CATEGORY.VR ? (
            <TitleToDoList vr>Vr / 3D Development</TitleToDoList>
          ) : category === CONSTANT.CATEGORY.ENGLISH ? (
            <TitleToDoList eng>English</TitleToDoList>
          ) : category === CONSTANT.CATEGORY.MARKETING ? (
            <TitleToDoList mark>Marketing</TitleToDoList>
          ) : category === CONSTANT.CATEGORY.HOME ? (
            <TitleToDoList home>Home duties</TitleToDoList>
          ) : category === CONSTANT.CATEGORY.DEVELOPMENT ? (
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
            client={toDoList.client}
            project={toDoList.project}
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
