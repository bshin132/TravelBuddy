import React from "react";
import styled from "styled-components";
import "./DestinationCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHeart } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ background }) => background});
  cursor: pointer;
  box-shadow: 1px 15px 63px -16px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 15px 63px -16px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 15px 63px -16px rgba(0, 0, 0, 0.5);
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  padding-left: 10px;
`;

const Title = styled.p`
  font-weight: bold;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: left;
  position: relative;
  margin-bottom: -7px;
`;

const Subtitle = styled.p`
  font-size: 10px;
  text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black;
  text-align: left;
  padding-left: 2px;
`;

export default function DestinationCard({ background, title, subtitle, onClick }) {
  return (
    <Container background={background} className="card" onClick={onClick}>
      <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      <HeaderContainer>
        <Title>{title}</Title>
        <Subtitle>
          {" "}
          <FontAwesomeIcon icon={faLocationDot} /> {subtitle}
        </Subtitle>
      </HeaderContainer>
    </Container>
  );
}
