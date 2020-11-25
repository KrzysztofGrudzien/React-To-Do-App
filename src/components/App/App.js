import React, { useState } from "react";
import styled from "styled-components";
import "./App.scss";
import ImgAvatar from "../../assets/images/author@2x.jpg";
import ImgTasks from "../../assets/images/tasks@2x.jpg";
import Form from "../Form/Form";
import ToDoList from "../ToDoList/ToDoList";

const Header = styled.header`
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  z-index: 100;
`;

const WelcomeBox = styled.div`
  align-items: center;
  display: flex;
  text-align: right;
`;

const AssideBox = styled.div`
  background-color: #ffffff;
  border-right: dashed 1px #edeef2;
  box-sizing: none;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  position: relative;
  width: 376px;
  z-index: 1;
`;

const AuthorDescription = styled.p`
  padding: 20px;
`;

const ProjectDescription = styled.li`
  border-left: 3px solid
    ${props =>
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
  font-weight: 600;
  margin: 10px 0;
  padding: 5px;
`;

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoLists, setToDoLists] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDoLists, setFilteredToDoLists] = useState([]);

  const handleFilteredToDoLists = () => {
    if (status === "completed") {
      setFilteredToDoLists(toDoLists.filter(toDo => toDo.completed === true));
    } else if (status === "uncompleted") {
      setFilteredToDoLists(toDoLists.filter(toDo => toDo.completed === true));
    } else {
      setFilteredToDoLists(toDoLists);
    }
  };
  return (
    <div className="App">
      <Header>
        <h1>
          TO DO APP <strong>for Developer</strong>
        </h1>
        <WelcomeBox>
          <div className="info">
            <p className="info__name">
              <b>Hi, Krzysztof Grudzień</b>
            </p>
            <p className="info__email">krzysztof.grudzien.fed@gmail.com</p>
          </div>
          <img src={ImgAvatar} alt="picture of author" className="avatar" />
        </WelcomeBox>
      </Header>

      <main>
        <AssideBox>
          <img src={ImgTasks} alt="picture of author" />
          <AuthorDescription>
            Hi there, I'm Krzysztof I’m an aspiring FrontEnd Developer and
            absolutely crazy about fishing and cooking. Moreover, I am
            interested in UX/UI and web design of general meaning. <br />
            <br />
            You might be interested in checking the list of my skills. Don’t
            forget to have a glimpse of my projects. Currently I’m looking for a
            new challenges so if you have one - please contact with me. <br />
            <br />
          </AuthorDescription>
          <div className="project-titles">
            <h2>PROJECTS</h2>
            <ul>
              <ProjectDescription>Development</ProjectDescription>
              <ProjectDescription web>Webdesign</ProjectDescription>
              <ProjectDescription eng>
                English conversation/homework
              </ProjectDescription>
              <ProjectDescription vr>VR / 3D Development</ProjectDescription>
              <ProjectDescription mark>Marketing</ProjectDescription>
              <ProjectDescription home>Home duties</ProjectDescription>
            </ul>
          </div>
        </AssideBox>
        <div className="form-container">
          <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            toDoLists={toDoLists}
            setToDoLists={setToDoLists}
            setStatus={setStatus}
          />
          <ToDoList toDoLists={toDoLists} setToDoLists={setToDoLists} />
        </div>
      </main>
    </div>
  );
};

export default App;
