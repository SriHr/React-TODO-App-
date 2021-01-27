import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todos from "./Component/Todos";
import TodoFrom from "./Component/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loacalTodos = localStorage.getItem("todos");
    console.log({ localStorage });
    if (loacalTodos) {
      setTodos(JSON.parse(loacalTodos));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container fluid>
      <h1>Todo With Local Storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoFrom addTodos={addTodos} />
    </Container>
  );
};

export default App;
