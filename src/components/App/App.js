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
    if (category === "development") {
      setFilteredToDoLists(
        toDoLists.filter(toDo => toDo.category === "development")
      );
    } else if (category === "webdesign") {
      setFilteredToDoLists(
        toDoLists.filter(toDo => toDo.category === "webdesign")
      );
    } else if (category === "english") {
      setFilteredToDoLists(
        toDoLists.filter(toDo => toDo.category === "english")
      );
    } else if (category === "vr") {
      setFilteredToDoLists(toDoLists.filter(toDo => toDo.category === "vr"));
    } else if (category === "marketing") {
      setFilteredToDoLists(
        toDoLists.filter(toDo => toDo.category === "marketing")
      );
    } else if (category === "home") {
      setFilteredToDoLists(toDoLists.filter(toDo => toDo.category === "home"));
    } else {
      setFilteredToDoLists(toDoLists);
    }
  };

  const handleFilteredPriority = () => {
    if (priority === "low") {
      setFilteredToDoListsPriority(
        toDoLists.filter(toDo => toDo.priority === "low")
      );
    } else if (priority === "medium") {
      setFilteredToDoListsPriority(
        toDoLists.filter(toDo => toDo.priority === "medium")
      );
    } else if (priority === "high") {
      setFilteredToDoListsPriority(
        toDoLists.filter(toDo => toDo.priority === "high")
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
          <Route path="/" exact>
            <WelcomeBox />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/add-task">
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
                priority={priority}
                setPriority={setPriority}
              />
            </div>
          </Route>
          <Route path="/statistics">
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
                {filter === "category" ? (
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
