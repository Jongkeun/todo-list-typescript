import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import Delete from "./Delete";

type TodoProps = {
  todo: {
    id: string;
    isDone: boolean;
    content: string;
  };
  checkBoxChanged: Function;
  deleteTodo: Function;
};

const Container = styled.div`
  display: flex;
  margin: 5px 1px;
  width: 90%;
  border: 1px white solid;
`;
const Todo = ({ todo, checkBoxChanged, deleteTodo }: TodoProps) => {
  const updateTodo = () => {
    console.log(todo.id);
  };
  return (
    <Container>
      <Checkbox
        content={todo.content}
        onChange={updateTodo}
        checked={todo.isDone}
      />
      <Delete />
    </Container>
  );
};

export default Todo;
