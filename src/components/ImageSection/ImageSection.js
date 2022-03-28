import React from "react";
import Image from "../Image/Image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const First = styled.div`
  display: flex;
`;

const Second = styled.div`
  display: flex;
  justify-content:center;
`;

export default function ImageSection({}) {
  return (
    <Container>
      <First>
        <Image background="/whistler.jpg" />
        <Image background="/whistler.jpg" />
        <Image background="/whistler.jpg" />
      </First>
      <Second>
        <Image background="/whistler.jpg" width="305px"/>
        <Image background="/whistler.jpg" width="305px"/>
      </Second>
    </Container>
  );
}
