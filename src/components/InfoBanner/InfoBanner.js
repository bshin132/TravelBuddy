import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 150px;
  border-radius: 10px;
  color: white;
  background-color: #3e8f7d;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const Header = styled.h3`
  width: 140px;
  text-align: left;
  padding-left: 25px;
`;

export default function InfoBanner({}) {
  return (
    <Container>
      <Header>What You'll Need to Bring</Header>
    </Container>
  );
}
