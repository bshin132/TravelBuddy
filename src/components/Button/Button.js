import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.button`
  width: ${(props) => (props.type ? theme[props.type].buttonWidth : "120px")};
  height: ${(props) => (props.type ? theme[props.type].buttonHeight : "40px")};
  background-color: ${(props) =>
    props.type ? theme[props.type].default : "#3E8F7D"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.type ? theme[props.type].borderStyle : "none")};
  border-radius: 7px;
  cursor: pointer;
  color: ${(props) => (props.type ? theme[props.type].textColor : "#000000")};
  &:hover {
    background-color: ${(props) =>
      props.type ? theme[props.type].onHover : "#70A99C"};
  }
`;

const Text = styled.p`
  font-size: 16px;
`;

const theme = {
  defaultButton: {
    onHover: "#FFFFFF",
    default: "#FFFFFF",
    borderStyle: "none",
    buttonWidth: "170px",
    buttonHeight: "50px",
    textColor: "#000000"
  },
  backButton: {
    onHover: "#70a99c",
    default: "#3e8f7d",
    borderStyle: "none",
    buttonWidth: "70px",
    buttonHeight: "30px",
    textColor: "#FFFFFF"
  },
};

const icons = {
  arrowLeft: faArrowLeft,
};

export default function Button({
  label,
  buttonWidth,
  buttonBackgroundColor,
  type,
  icon,
  onClick
}) {
  const svg = icons[icon];
  return (
    <Container
      type={type}
      onClick={onClick}
      style={{
        width: buttonWidth,
        backgroundColor: buttonBackgroundColor,
      }}
    >
      {svg ? <FontAwesomeIcon icon={svg}/> : null}
      <Text>{label}</Text>
    </Container>
  );
}
