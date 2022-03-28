import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 88vw;
  height: 450px;
  border-radius: 7px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  padding-left: 30px;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h2`
  color: #ffffff;
  font-size: 48px;
  margin: 0;
`;

const Sublabel = styled.h4`
  color: #ffffff;
  font-size: 32px;
  margin: 0;
`;

export default function ImageHeader({ background, destination, province }) {
  return (
    <Container background={background}>
      <Label>{destination}</Label>
      <Sublabel>{province}</Sublabel>
    </Container>
  );
}
