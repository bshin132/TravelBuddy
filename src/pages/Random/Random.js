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
        <RandomCard
          title="Whistler Village"
          subtitle="Whistler, B.C."
          background="/whistler.jpg"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
        />{" "}
      </MainContent>
    </MainContainer>
  );
}
