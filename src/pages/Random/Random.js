import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import RandomCard from "../../components/RandomCard/RandomCard";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 25px;
`;

const Logo = styled.div`
  padding: 20px 0 0 15px;
`;

const MainContent = styled.div`
  margin: 15px 0 0 20px;
  width: 90%;
`;

export default function Random({}) {
  return (
    <MainContainer>
      <NavContainer>
        <Logo>
          <div>LOGO</div>
        </Logo>
        <NavBar />
      </NavContainer>

      <MainContent>
        <RandomCard />
      </MainContent>
    </MainContainer>
  );
}