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

export default function ImageSection({photos}) {
  return (
    <Container>
      <First>
        <Image background={photos[1]} />
        <Image background={photos[2]} />
        <Image background={photos[3]} />
      </First>
      <Second>
        <Image background={photos[4]} width="305px"/>
        <Image background={photos[5]} width="305px"/>
      </Second>
    </Container>
  );
}
