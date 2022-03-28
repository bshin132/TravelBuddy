import React from "react";
import Button from "../../components/Button/Button";
import Nav from "../../components/Nav/Nav";
import ImageSection from "../../components/ImageSection/ImageSection";
import Stop from "../../components/Stop/Stop";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import ImageHeader from "../../components/ImageHeader/ImageHeader";
import Map from "../../components/Map/Map";
import styled from "styled-components";
import { faMap, faHouse, faHeart } from "@fortawesome/free-solid-svg-icons";

const MainContainer = styled.div`
  display: flex;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 25px;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
`;

const Logo = styled.div`
  padding: 20px 0 0 15px;
`;

const MainContent = styled.div`
  margin: 15px 0 0 20px;
  width: 90%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

const Main = styled.div`
  width: 100%;
  height: 87%;
  background-color: white;
  border-radius: 10px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: break;
  align-items: center;
  padding-bottom:40px;
`;

const ImageContainer = styled.div`
  display: flex;
  margin-top: 60px;
`;

const DescriptionContainer = styled.div`
  margin-top: 60px;
  width: 60%;
  text-align: center;
`;

const MapCont = styled.div`
  margin-top: 60px;
`;

const BringCont = styled.div`
  margin-top: 60px;
`;

export default function Details({}) {
  return (
    <MainContainer>
      <NavContainer>
        <Logo>
          <div>LOGO</div>
        </Logo>
        <NavBar>
          <Nav
            icon={faHouse}
            iconColor="#3E8F7D"
            label="Dashboard"
            fontWeight="bold"
            textColor="#3E8F7D"
          />
          <Nav
            icon={faMap}
            iconColor="#3E8F7D"
            label="Random"
            fontWeight="bold"
            textColor="#3E8F7D"
          />
          <Nav
            icon={faHeart}
            iconColor="#3E8F7D"
            label="Favorites"
            fontWeight="bold"
            textColor="#3E8F7D"
          />
        </NavBar>
      </NavContainer>

      <MainContent>
        <HeaderContainer>
          <Button icon="arrowLeft" type="backButton" />
        </HeaderContainer>

        <Main>
          <ImageHeader
            background="/whistler.jpg"
            destination="Whistler"
            province="British Columbia"
          />
          
          <DescriptionContainer>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </DescriptionContainer>

          <ImageContainer>
            <ImageSection />
          </ImageContainer>

          <MapCont>
            <Map />
            <Stop
              number="1"
              stop="Stop 1"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s."
            />
          </MapCont>

          <BringCont>
            <InfoBanner />
          </BringCont>
        </Main>
      </MainContent>
    </MainContainer>
  );
}
