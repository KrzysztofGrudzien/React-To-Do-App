import React, { useEffect, useState } from "react";
import "./App.scss";
import Form from "../Form/Form";
import ToDoList from "../ToDoList/ToDoList";
import Navigation from "../Navigation/Navigation";
import WelcomeBox from "../WelcomeBox/WelcomeBox";
import WelcomeDataInfo from "../WelcomeDataInfo/WelcomeDataInfo";
import Header from "../Header/Header";
import SelectFilter from "../Form/SelectFilter";
import SelectCategory from "../Form/SelectCategory";
import SelectPriority from "../Form/SelectPriority";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import Settings from "../../pages/Settings/Settings";
import Tasks from "../../pages/Tasks/Tasks";
import Clients from "../../pages/Clients/Clients";
import Statistics from "../../pages/Statistics/Statistics";
import LastSixTasks from "../LastSixTasks/LastSixTasks";
import CONSTANT from "../../utils/constant";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextAreaValue] = useState("");
  const [toDoLists, setToDoLists] = useState([]);
  const [filteredToDoLists, setFilteredToDoLists] = useState([]);
  const [filteredToDoListsPriority, setFilteredToDoListsPriority] = useState(
    []
  );
  const [category, setCategory] = useState("development");
  const [status, setStatus] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [date, setDate] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [priority, setPriority] = useState("low");
  const [filter, setFilter] = useState("category");
  const [author, setAuthor] = useState("admin");
  const [comment, setComment] = useState("");
  const [client, setClient] = useState("our  company");
  const [project, setProject] = useState("project for us");

  useEffect(() => {
    handleFilteredCategory();
    handleFilteredPriority();
    handleIsActive(isActive);
  }, [toDoLists, isActive, priority, category]);

  const handleIsActive = active => {
    if ((active = !isActive)) {
      const intId = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
      setIntervalId(intId);
    } else {
      clearInterval(intervalId);
    }
  };

  if (time < 0) {
    setIsActive(!isActive);
    setTime(time => time + 1);
  }

  const handleFilteredCategory = () => {
    if (category === CONSTANT.CATEGORY.DEVELOPMENT) {
      setFilteredToDoLists(
        toDoLists.filter(
          toDo => toDo.category === CONSTANT.CATEGORY.DEVELOPMENT
        )
      );
    } else if (category === CONSTANT.CATEGORY.WEBDESIGN) {
      setFilteredToDoLists(
        toDoLists.filter(toDo => toDo.category === CONSTANT.CATEGORY.WEBDESIGN)
      );
    } else if (category === CONSTANT.CATEGORY.ENGLISH) {
      setFilteredToDoLists(
        toDoLists.filter(toDo => toDo.category === CONSTANT.CATEGORY.ENGLISH)
      );
    } else if (category === CONSTANT.CATEGORY.VR) {
      setFilteredToDoLists(
        toDoLists.filter(toDo => toDo.category === CONSTANT.CATEGORY.VR)
      );
    } else if (category === CONSTANT.CATEGORY.MARKETING) {
      setFilteredToDoLists(
        toDoLists.filter(toDo => toDo.category === CONSTANT.CATEGORY.MARKETING)
      );
    } else if (category === CONSTANT.CATEGORY.HOME) {
      setFilteredToDoLists(
        toDoLists.filter(toDo => toDo.category === CONSTANT.CATEGORY.HOME)
      );
    } else {
      setFilteredToDoLists(toDoLists);
    }
  };

  const handleFilteredPriority = () => {
    if (priority === CONSTANT.PRIORITY.LOW) {
      setFilteredToDoListsPriority(
        toDoLists.filter(toDo => toDo.priority === CONSTANT.PRIORITY.LOW)
      );
    } else if (priority === CONSTANT.PRIORITY.MEDIUM) {
      setFilteredToDoListsPriority(
        toDoLists.filter(toDo => toDo.priority === CONSTANT.PRIORITY.MEDIUM)
      );
    } else if (priority === CONSTANT.PRIORITY.HIGH) {
      setFilteredToDoListsPriority(
        toDoLists.filter(toDo => toDo.priority === CONSTANT.PRIORITY.HIGH)
      );
    } else {
      setFilteredToDoListsPriority(toDoLists);
    }
  };

  const handleOnClickStartTime = () => {
    setIsActive(!isActive);
  };

  const handleOnClickResetTime = () => {
    setTime(0);
  };

  return (
    <div className="App">
      <Header
        startTime={handleOnClickStartTime}
        resetTime={handleOnClickResetTime}
        toDoLists={toDoLists}
        time={time}
        isActive={isActive}
      />
      <Navigation />
      <WelcomeDataInfo toDoLists={toDoLists} />
      <main>
        <Switch>
          <Route path={CONSTANT.PATH.DEFAULT} exact>
            <div className="last-tasks-container">
              <WelcomeBox />
              <LastSixTasks toDoLists={toDoLists} />
            </div>
          </Route>
          <Route path={CONSTANT.PATH.CLIENTS}>
            <Clients />
          </Route>
          <Route path={CONSTANT.PATH.PROJECTS}>
            <Projects />
          </Route>
          <Route path={CONSTANT.PATH.SETTINGS}>
            <Settings />
          </Route>
          <Route path={CONSTANT.PATH.ADD_TASK}>
            <div className="form-container">
              <Form
                inputValue={inputValue}
                setInputValue={setInputValue}
                toDoLists={toDoLists}
                setToDoLists={setToDoLists}
                category={category}
                setCategory={setCategory}
                textareaValue={textareaValue}
                setTextAreaValue={setTextAreaValue}
                status={status}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                setMinutes={setMinutes}
                setHours={setHours}
                setSeconds={setSeconds}
                setDate={setDate}
                date={date}
                priority={priority}
                setPriority={setPriority}
                author={author}
                setAuthor={setAuthor}
                comment={comment}
                setComment={setComment}
                project={project}
                setProject={setProject}
                client={client}
                setClient={setClient}
              />
            </div>
          </Route>
          <Route path={CONSTANT.PATH.STATISTICS}>
            <Statistics />
          </Route>
          <Route path="/tasks">
            <div className="tasks-container">
              <div className="tasks-filter-container">
                <SelectFilter
                  filter={filter}
                  setFilter={setFilter}
                  setPriority={setPriority}
                  setCategory={setCategory}
                />
                {filter === CONSTANT.FILTER.CATEGORY ? (
                  <SelectCategory
                    setCategory={setCategory}
                    category={category}
                  />
                ) : (
                  <SelectPriority setPriority={setPriority} />
                )}
              </div>
              {toDoLists.length !== 0 ? (
                <ToDoList
                  toDoLists={toDoLists}
                  setToDoLists={setToDoLists}
                  category={category}
                  filteredToDoLists={filteredToDoLists}
                  filteredToDoListsPriority={filteredToDoListsPriority}
                  filter={filter}
                  setTime={setTime}
                  date={date}
                  priority={priority}
                  author={author}
                  comment={comment}
                  project={project}
                  client={client}
                />
              ) : (
                <h2 className="info">
                  <strong>NO TASKS TO DO</strong>
                </h2>
              )}
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
