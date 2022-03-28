import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height:250px;
  border-radius: 7px 7px 0 0;
  border: solid 2px #3E8F7D;
  width: 70vw;
`;

export default function Map({}) {
  return (
    <Container>
      Map goes here
    </Container>
  );
}
