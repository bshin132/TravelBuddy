import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 7px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const TitleContainer = styled.div`

`;

const Title = styled.h2`
  color: #ffffff;
  margin:0;
`;

const Subtitle = styled.p`
  color: #ffffff;
  margin:0;
  font-size:14px;
`;

const Description = styled.p`
  color: #ffffff;
  font-size:10px;
  width:230px;
`;

export default function RandomCard({
  title,
  background,
  subtitle,
  description="Description goes here",
}) {
  return (
    <Container background={background}>
      <TitleContainer>
        <Title>{title}</Title>
        <Subtitle>
          <FontAwesomeIcon icon={faLocationDot} />
          {subtitle}
        </Subtitle>
      </TitleContainer>
      <Description>{description}</Description>
      <Button label="Generate New" type="defaultButton" />
    </Container>
  );
}
