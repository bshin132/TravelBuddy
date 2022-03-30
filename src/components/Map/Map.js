import React from "react";
import styled from "styled-components";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Container = styled.div`
  display: flex;
  height: 250px;
  border-radius: 7px 7px 0 0;
  border: solid 2px #3e8f7d;
  width: 70vw;
`;

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function Map({}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCRWplgDVwEMAhwPNe7E3w0F2iP9Tsl8Pw",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        />
      ) : (
        ""
      )}
    </Container>
  );
}
