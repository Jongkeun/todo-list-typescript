import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Todo from "../components/Todo";
import Title from "../components/Title";
import TodoInput from "../components/TodoInput";
import { setStorage, getStorage } from "../utils/storage";
import axios from "axios";

type TodoObj = {
  id: string;
  isDone: boolean;
  content: string;
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #284b63;
  max-width: 500px;
  margin: auto;
  min-height: 100vh;
`;

const generateID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
const TodoListContainer = () => {
  const storedTodoList = getStorage("todos");
  const values = storedTodoList ? JSON.parse(storedTodoList) : [];
  const [todos, setTodos] = useState(values);

  useEffect(() => {
    setStorage("todos", JSON.stringify(todos));
    axios.get("/page/b").then((data) => console.log(data));
  });

  const addTodo = (content: string) => {
    const updated = todos.concat({
      id: generateID(),
      isDone: false,
      content: content,
    });
    setTodos(updated);
  };

  const toggleCheckbox = (id: string) => {
    let updated = todos.map((element: TodoObj) => {
      if (element.id === id) {
        element.isDone = !element.isDone;
      }
      return element;
    });
    setTodos(updated);
  };

  const deleteTodo = (id: string) => {
    let updated = todos.filter((element: TodoObj) => element.id !== id);
    setTodos(updated);
  };

  return (
    <Container>
      <Title title={"typescript"} />
      <TodoInput addTodo={addTodo} />
      {todos.map((todo: TodoObj) => (
        <Todo
          key={todo.id}
          todo={todo}
          checkBoxChanged={toggleCheckbox}
          deleteTodo={deleteTodo}
        />
      ))}
    </Container>
  );
};

export default TodoListContainer;
