import React, { useState } from "react";
import styled from "styled-components";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import mapStyles from "../../mapStyles";

const Container = styled.div`
  display: flex;
  height: 300px;
  border-radius: 7px 7px 0 0;
  border: solid 2px #3e8f7d;
  width: 70vw;
`;

const mapContainerStyle = {
  width: "70vw",
  height: "300px",
  borderRadius: "6px 6px 0 0",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: mapStyles,
};

export default function Map({ destination, onMarkerClick }) {
  const stopsList = destination.nearby_places.map((place, index) => {
    return (
      <Marker
        key={place.place_id}
        position={{
          lat: place.location.lat,
          lng: place.location.lng,
        }}
        onClick={() => {
          onMarkerClick({ num: index + 1, place });
        }}
      />
    );
  });

  const center = {
    lat: destination.location.lat,
    lng: destination.location.lng,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

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
          mapContainerStyle={mapContainerStyle}
          center={center}
          options={options}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {" "}
          {stopsList}
        </GoogleMap>
      ) : (
        ""
      )}
    </Container>
  );
}
