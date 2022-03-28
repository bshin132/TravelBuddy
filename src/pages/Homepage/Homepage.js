import React from "react";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterButton from "../../components/FilterButton/FilterButton";
import styled from "styled-components";
import { faMap, faHouse, faHeart } from "@fortawesome/free-solid-svg-icons";

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

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
`;

const Logo = styled.div`
  padding: 20px 0 0 15px;
`;

const MainContent = styled.div`
  margin: 15px 0 0 20px;
  width: 90%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div``;

const FilterContainer = styled.div`
  margin-left: 20px;
  display: flex;
`;

const Main = styled.div`
  width: 100%;
  height: 87%;
  background-color: white;
  border-radius: 10px;
  margin: 15px;
  padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: break;
`;

export default function Homepage({}) {
  return (
    <MainContainer>
      <NavContainer>
        <Logo>
          <div>LOGO</div>
        </Logo>
        <NavBar>
          <Nav
            icon={faHouse}
            iconColor="#3E8F7D"
            label="Dashboard"
            fontWeight="bold"
            textColor="#3E8F7D"
          />
          <Nav
            icon={faMap}
            iconColor="#3E8F7D"
            label="Dashboard"
            fontWeight="bold"
            textColor="#3E8F7D"
          />
          <Nav
            icon={faHeart}
            iconColor="#3E8F7D"
            label="Dashboard"
            fontWeight="bold"
            textColor="#3E8F7D"
          />
        </NavBar>
      </NavContainer>

      <MainContent>
        <HeaderContainer>
          <SearchContainer>
            <SearchBar />
          </SearchContainer>
          <FilterContainer>
            <FilterButton type="filterActive" label="AB" />
            <FilterButton type="notActive" label="BC" />
          </FilterContainer>
        </HeaderContainer>

        <Main>
          <DestinationCard
            title="Whistler Village"
            subtitle="Whistler, B.C."
            background="/whistler.jpg"
          />
          <DestinationCard
            title="Whistler Village"
            subtitle="Whistler, B.C."
            background="/whistler.jpg"
          />
          <DestinationCard
            title="Whistler Village"
            subtitle="Whistler, B.C."
            background="/whistler.jpg"
          />
          <DestinationCard
            title="Whistler Village"
            subtitle="Whistler, B.C."
            background="/whistler.jpg"
          />

          <DestinationCard
            title="Whistler Village"
            subtitle="Whistler, B.C."
            background="/whistler.jpg"
          />
        </Main>
      </MainContent>
    </MainContainer>
  );
}
