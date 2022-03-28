import React from "react";
import ItemBanner from "../ItemBanner/ItemBanner";
import styled from "styled-components";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 70vw;
  height: 150px;
  border-radius: 7px;
  color: white;
  background-color: #3e8f7d;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const Header = styled.h3`
  width: 140px;
  text-align: left;
  padding-left: 45px;
`;

const ItemCont = styled.div`
  padding-left: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const Left = styled.div`

`;

const Right = styled.div`

`;

export default function InfoBanner({}) {
  return (
    <Container>
      <Header>What You'll Need to Bring</Header>
      <ItemCont>
        <Left>
          <ItemBanner icon={faCamera} title="Camera" />
          <ItemBanner icon={faCamera} title="Camera" />
          <ItemBanner icon={faCamera} title="Camera" />
        </Left>
        <Right>
          <ItemBanner icon={faCamera} title="Camera" />
          <ItemBanner icon={faCamera} title="Camera" />
          <ItemBanner icon={faCamera} title="Camera" />
        </Right>
      </ItemCont>
    </Container>
  );
}
