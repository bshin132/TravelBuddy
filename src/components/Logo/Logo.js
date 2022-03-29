import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

const Container = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  background-image: url(${logo});
`;

export default function Logo() {
  return <Container></Container>;
}
