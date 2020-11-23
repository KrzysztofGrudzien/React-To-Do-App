import React, { useState } from "react";
import "./App.css";
import Form from "../Form/Form";
import ToDoList from "../ToDoList/ToDoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <header>
        <h1>TO DO APP</h1>
      </header>
      <Form setInputValue={setInputValue} />
      <ToDoList />
    </div>
  );
}

export default App;
