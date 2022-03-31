import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width:${props => props.width ? props.width : "200px"};
  height:200px;
  border-radius:7px;
  background-image: url(${({background}) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin:5px;
`;

export default function Image({ background, width }) {
  return (
    <Container background={background} style={width={width}}>
    </Container>
  );
}
