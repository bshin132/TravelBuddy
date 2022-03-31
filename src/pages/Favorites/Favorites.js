import React, { useEffect, useState } from "react";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import axios from "axios";
import { useCookies } from "react-cookie";

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

const Main = styled.div`
height:400px;
  background-color: white;
  border-radius: 10px;
  margin: 15px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  text-align:left;
`;

export default function Favorites({}) {
  const [destinations, setDestinations] = useState([]);
  const [cookies, setCookie] = useCookies(["user_id"]);
  const [favSwitch, setFavSwitch] = useState(false);

  useEffect(() => {
    axios.get(`/api/user/${cookies.user_id}/favorites`).then((res) => {
      setDestinations(res.data);
    });
  }, [favSwitch]);

  const destinationList = destinations.map((destination) => {
    return (
      <DestinationCard
        title={destination.name}
        subtitle={destination.province}
        background={destination.photo}
        key={destination.id}
        id={destination.id}
        favorited={true}
        favSwitch={favSwitch}
        setFavSwitch={setFavSwitch}
      />
    );
  });

  return (
    <MainContainer>
      <NavContainer>
        <NavBar />
      </NavContainer>

      <MainContent>
        <Main>{destinationList}</Main>
      </MainContent>
    </MainContainer>
  );
}
