import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import ImageSection from "../../components/ImageSection/ImageSection";
import Stop from "../../components/Stop/Stop";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import ImageHeader from "../../components/ImageHeader/ImageHeader";
import Map from "../../components/Map/Map";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 25px;
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
  width: 97%;
  height: 87%;
  border: 2px solid #3e8f7d;
  background-color: white;
  border-radius: 10px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: break;
  align-items: center;
  padding-bottom: 40px;
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
  const [destination, setDestination] = useState({
    nearby_places: [],
    location: { lat: 43.651, lng: -79.347 },
    photos: [],
    packing_list: [],
  });
  const [stop, setStop] = useState({
    num: 1,
    place: {},
    rating: 1,
    address: "",
  });

  const params = useParams();
  useEffect(() => {
    axios.get(`/api/destinations/${params.id}/details`).then((res) => {
      setDestination(res.data);
      setStop({ num: 1, place: res.data.nearby_places[0] });
    });
  }, []);

  return (
    <MainContainer>
      <NavContainer>
        <NavBar />
      </NavContainer>

      <MainContent>
        <HeaderContainer>
          <Link to="/">
            <Button icon="arrowLeft" type="backButton" />
          </Link>
        </HeaderContainer>

        <Main>
          <ImageHeader
            province={destination.province}
            name={destination.name}
            image={destination.photos[0]}
          />

          <DescriptionContainer>{destination.description}</DescriptionContainer>

          <ImageContainer>
            <ImageSection photos={destination.photos}></ImageSection>
          </ImageContainer>

          <MapCont>
            <Map onMarkerClick={setStop} destination={destination} />
            <Stop
              num={stop.num}
              stop={stop.place.name}
              rating={stop.place.rating}
              description={stop.place.address}
            />
          </MapCont>

          <BringCont>
            <InfoBanner destination={destination}/>
          </BringCont>
        </Main>
      </MainContent>
    </MainContainer>
  );
}
