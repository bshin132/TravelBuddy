import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`;

const Circle = styled.div`
  width:50px;
  height:50px;
  border-radius:25px;
  background-color:green;
`;

const HeaderContainer = styled.div`
  text-align:left;
  margin-left:10px;
`;

const Header = styled.p`
  margin: 0;
  font-weight:bold;
`;

const Subheader = styled.p`
  margin: 0;
`

export default function Stop({stop, description}) {
  return (
    <Container>
      <Circle />
      <HeaderContainer>
        <Header>{stop}</Header>
        <Subheader>{description}</Subheader>
      </HeaderContainer>
    </Container>
  );
}
