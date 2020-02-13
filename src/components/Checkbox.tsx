import React from "react";
import styled from "styled-components";

type CheckboxProps = {
  content: string;
  onChange: Function;
  checked: boolean;
};
const Label = styled.label`
  padding: 15px 30px;
  padding-left: 40px;
  vertical-align: text-top;
  position: relative;
  cursor: pointer;

  &.checked {
    text-decoration: line-through;
  }
`;
const Input = styled.input`
  position: absolute;
  opacity: 0;
`;
const Span = styled.span`
  position: absolute;
  top: 32px;
  left: 3px;
  height: 25px;
  width: 25px;
  background-color: #eee;

  &:after {
    content: "";
    position: absolute;
    display: none;
    margin-right: 10px;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
const Checkbox = ({ content, onChange, checked }: CheckboxProps) => {
  const onChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange();
  };
  return (
    <Label className={checked ? "checked" : ""}>
      {content}
      <Input type="checkbox" onChange={onChanged}></Input>
      <Span />
    </Label>
  );
};

export default Checkbox;
