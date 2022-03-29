import React from "react";
import styled from "styled-components";
import "./ItemBanner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 40px;
  color: #000000;
`;

export default function ItemBanner({ title, icon }) {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} className="icon" />
      {title}
    </Container>
  );
}
