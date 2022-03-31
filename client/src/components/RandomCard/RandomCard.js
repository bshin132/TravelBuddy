import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import "./RandomCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 7px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 9px;
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
  color: #ffffff;
  margin: 0;
  font-size: 46px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Subtitle = styled.p`
  color: #ffffff;
  margin: 0;
  font-size: 24px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Description = styled.p`
  color: #ffffff;
  font-size: 20px;
  width: 50%;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export default function RandomCard() {
  const [destination, setDestination] = useState({});

  const fetchData = () => {
    fetch("/api/destinations/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDestination(data);
      })
      .catch(() => {
        setDestination("ERROR");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container background={destination.photo}>
      <TitleContainer>
        <Title>{destination.name}</Title>
        <Subtitle>
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          {destination.province}
        </Subtitle>
      </TitleContainer>
      <Description>{destination.description}</Description>
      <Button label="Generate New" type="defaultButton" onClick={fetchData} />
    </Container>
  );
}
