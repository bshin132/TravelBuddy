import React from "react";
import styled from "styled-components";
import "./ItemBanner.scss";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 40px;
  color: #ffffff;
  font-family: "Outfit", sans-serif;
`;

export default function ItemBanner({ title }) {
  return <Container>{title}</Container>;
}
