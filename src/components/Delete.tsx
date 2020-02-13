import React from "react";
import styled from "styled-components";

type TitleProps = {
  title: string;
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

const Delete = () => {
  return <Button>X</Button>;
};

export default Delete;
