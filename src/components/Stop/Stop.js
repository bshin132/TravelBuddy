import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  height: 150px;
  border-radius: 0 0 7px 7px;
  border: solid 2px #3e8f7d;
  width: 70vw;
  background-color: #3e8f7d;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left:40px;
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #ffffff;
  display:flex;
  justify-content:center;
  align-items:center;
  color: #3e8f7d;
  font-weight:bold;
  font-size:32px;
`;

const HeaderContainer = styled.div`
  text-align: left;
  margin-left: 10px;
  color:#ffffff;
`;

const Header = styled.p`
  margin: 0;
  font-weight: bold;
`;

const Subheader = styled.p`
  margin: 0;
  font-size:14px;
`;

export default function Stop({ stop, description, num, rating }) {
  return (
    <Footer>
      <h2>Nearby Places to Visit</h2>
      <Container>
        <Circle>{num}</Circle>
        <HeaderContainer>
          <Header>{stop}</Header>
          <Subheader>{description}</Subheader>
          <Subheader><FontAwesomeIcon icon={faStar}/>{rating}</Subheader>
        </HeaderContainer>
      </Container>
    </Footer>
  );
}
