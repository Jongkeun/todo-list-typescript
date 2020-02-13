import React from "react";
import styled from "styled-components";

type DeleteProps = {
  onClick: () => void;
};
const Button = styled.button`
  float: right;
  background-color: transparent;
  border-width: 0;
  color: white;
  font-size: 30px;
  margin-left: auto;
  cursor: pointer;
`;

const Delete = ({ onClick }: DeleteProps) => {
  return <Button onClick={onClick}>X</Button>;
};

export default Delete;
