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
  justify-content: space-between;
  grid-area: header;
  padding: 0 20px;
  position: relative;
  z-index: 100;

  .app-title {
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
  }

  .app-date {
    font-weight: 400;
    font-size: 2rem;
    text-transform: uppercase;
  }
`;

const WelcomeBox = styled.div`
  align-items: center;
  display: flex;
  text-align: right;

  .app-avatar {
    border-radius: 50%;
    height: auto;
    margin-left: 10px;
    width: 60px;
  }
`;

const AssideBox = styled.div`
  background-color: #ffffff;
  border-right: dashed 1px #edeef2;
  box-sizing: none;
  display: flex;
  flex-direction: column;
  grid-area: aside;
  min-height: calc(100vh - 70px);
  position: relative;
  z-index: 1;

  .project-titles {
    padding: 20px;
  }
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
        <h1 className="app-title">
          TO DO APP <strong>for Developer</strong>
        </h1>
        <div className="app-date">
          Today is <b>Friday</b> - 26 / 11 / 2020
        </div>
        <WelcomeBox>
          <div className="app-info">
            <p className="app-info-name">
              <b>Hi, Krzysztof Grudzień</b>
            </p>
            <p className="app-info-email">krzysztof.grudzien.fed@gmail.com</p>
          </div>
          <img src={ImgAvatar} alt="picture of author" className="app-avatar" />
        </WelcomeBox>
      </Header>
      <AssideBox>
        <img src={ImgTasks} alt="picture of author" />
        <AuthorDescription>
          Hi there, I'm Krzysztof I’m an aspiring FrontEnd Developer and
          absolutely crazy about fishing and cooking. Moreover, I am interested
          in UX/UI and web design of general meaning. <br />
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
      <main>
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
