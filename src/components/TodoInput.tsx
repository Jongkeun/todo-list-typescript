import React from "react";
import styled from "styled-components";

type TodoInput = {
  addTodo: (content: string) => void;
};
const TextInput = styled.input`
  -webkit-font-smoothing: antialiased;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.03) 0 -2px 1px inset;
  box-sizing: border-box;
  font-size: 24px;
  line-height: 1.4em;
  padding: 16px 16px 16px 60px;
  width: 100%;
  &::placeholder {
    opacity: 0.5;
  }
`;

const TodoInput = ({ addTodo }: TodoInput) => {
  const handleKeyPress = (event: any) => {
    if (event.charCode === 13) {
      if (event.target.value !== "") {
        addTodo(event.target.value);
        event.target.value = "";
      }
    }
  };
  return (
    <TextInput
      type="text"
      onKeyPress={handleKeyPress}
      placeholder={"What needs to be done?"}
    />
  );
};

export default TodoInput;
