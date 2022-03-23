import React from "react";
import styled from "styled-components";
import './ItemBanner.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHSquare } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  font-size: 14px;
  color: black;
`;

export default function ItemBanner({ title, icon }) {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} className="icon"/>
      {title}
    </Container>
  );
}
