import React from "react";
import styled from "styled-components";

const Container = styled.button`
  margin-left:5px;
  min-width: 80px;
  height: 35px;
  background-color: ${(props) =>
    props.type ? theme[props.type].default : "#3E8F7D"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.type ? theme[props.type].textColor : "#FFFFFF")};
  border: ${(props) => (props.type ? theme[props.type].borderStyle : "none")};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.type ? theme[props.type].onHover : "#70A99C"};
    color: ${(props) =>
      props.type ? theme[props.type].hoverTextColor : "#FFFFFF"};
  }
`;

const Text = styled.p`
  font-size: 14px;
`;

const theme = {
  filterActive: {
    onHover: "#70A99C",
    default: "#3E8F7D",
    borderStyle: "none",
    textColor: "#FFFFFF",
    hoverTextColor: "#FFFFFF",
  },
  notActive: {
    onHover: "#3E8F7D",
    default: "#FFFFFF",
    textColor:"#3E8F7D",
    borderStyle: "2px solid #3E8F7D",
    hoverTextColor: "#FFFFFF",
  },
};

export default function FilterButton({ label, isActive, onClick }) {
  const type = isActive ? "filterActive" : "notActive"
  return (
    <Container type={type} onClick={onClick}>
      <Text>{label}</Text>
    </Container>
  );
}
