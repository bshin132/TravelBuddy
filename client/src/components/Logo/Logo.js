import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

const Container = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position:absolute;
  top:20px; 
  left:40px;
`;

export default function Logo() {
  return <Container></Container>;
}
