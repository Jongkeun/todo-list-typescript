import React, { useState } from "react";
import styled from "styled-components";
import Todo from "../components/Todo";
import Title from "../components/Title";

const Container = styled.div`
  margin: auto;
  background-color: #284b63;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 50vw;
  max-width: 800px;
`;
const TodoListContainer = () => {
  const generateID = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  const [todos, setTodos] = useState([
    { id: generateID(), isDone: false, content: "hello1" },
    { id: generateID(), isDone: false, content: "hello2" },
    { id: generateID(), isDone: false, content: "hello3" },
    { id: generateID(), isDone: false, content: "hello4" },
  ]);

  return (
    <Container>
      <Title title={"Todo List"} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          checkBoxChanged={() => "hello"}
          deleteTodo={() => "return"}
        />
      ))}
    </Container>
  );
};

export default TodoListContainer;
