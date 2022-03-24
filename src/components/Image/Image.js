import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width:100px;
  height:100px;
  border-radius:7px;
  background-image: url(${({background}) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function Image({ background }) {
  return (
    <Container background={background}>
    </Container>
  );
}
