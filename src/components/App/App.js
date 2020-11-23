import React from "react";
import "./App.css";
import Form from "../Form/Form";
import ToDoList from "../ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TO DO APP</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
