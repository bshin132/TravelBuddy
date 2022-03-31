import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import RandomCard from "../../components/RandomCard/RandomCard";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 25px;
`;


const MainContent = styled.div`
  margin: 15px 0 0 20px;
  width: 90%;
`;

export default function Random({}) {
  return (
    <MainContainer>
      <NavContainer>
        <NavBar />
      </NavContainer>

      <MainContent>
        <RandomCard />
      </MainContent>
    </MainContainer>
  );
}