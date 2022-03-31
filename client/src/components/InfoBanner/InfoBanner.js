import React from "react";
import ItemBanner from "../ItemBanner/ItemBanner";
import styled from "styled-components";

const Container = styled.div`
  width: 70vw;
  height: 150px;
  border-radius: 7px;
  color: white;
  background-color: #3e8f7d;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: "Outfit", sans-serif;
`;

const HeaderCont = styled.div`
  padding-left: 45px;
`;

const Header = styled.h2`
  width: 180px;
  text-align: left;
`;

const ItemCont = styled.div``;

const LeftRightCont = styled.div`
  display: flex;
  width: 450px;
  justify-content: space-around;
  margin-left:120px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-direction: column;
`;

export default function InfoBanner({ destination }) {
  const itemList = destination.packing_list.map((name, index) => {
    return <ItemBanner key={index} title={name} />;
  });

  return (
    <Container>
      <HeaderCont>
        <Header>What You'll Need to Bring</Header>
      </HeaderCont>
      <LeftRightCont>
        <Left>
          <ItemCont>{itemList[0]}</ItemCont>
          <ItemCont>{itemList[1]}</ItemCont>
          <ItemCont>{itemList[2]}</ItemCont>
        </Left>
        <Right>
          <ItemCont>{itemList[3]}</ItemCont>
          <ItemCont>{itemList[4]}</ItemCont>
          <ItemCont>{itemList[5]}</ItemCont>
        </Right>
      </LeftRightCont>
    </Container>
  );
}
