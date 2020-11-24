import React, { useState } from "react";
import "./App.css";
import Form from "../Form/Form";
import ToDoList from "../ToDoList/ToDoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [toDoLists, setToDoLists] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>TO DO APP</h1>
      </header>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        toDoLists={toDoLists}
        setToDoLists={setToDoLists}
      />
      <ToDoList toDoLists={toDoLists} setToDoLists={setToDoLists} />
    </div>
  );
}

export default App;
