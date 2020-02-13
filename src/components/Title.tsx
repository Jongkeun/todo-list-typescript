import React from "react";
import styled from "styled-components";

type TitleProps = {
  title: string;
};
const Container = styled.div`
  display: block;
  float: left;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  text-rendering: optimizelegibility;
  width: 100%;
  color: #f4f9e9;
`;

const Title = ({ title }: TitleProps) => {
  return <Container>{title}</Container>;
};

export default Title;
