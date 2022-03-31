import React from "react";
import styled from "styled-components";
import "./DestinationCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-image: url(${({ background }) => background});
  cursor: pointer;
  box-shadow: 1px 15px 63px -16px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 15px 63px -16px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 15px 63px -16px rgba(0, 0, 0, 0.5);
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  padding-left: 10px;
`;

const Title = styled.p`
  font-weight: bold;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: left;
  position: relative;
  margin-bottom: -7px;
`;

const Subtitle = styled.p`
  font-size: 10px;
  text-shadow: -0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black;
  text-align: left;
  padding-left: 2px;
`;

export default function DestinationCard({
  background,
  title,
  subtitle,
  favorited,
  id,
  favSwitch,
  setFavSwitch,
}) {
  const [cookies, setCookie] = useCookies(["user_id"]);

  const unFav = function () {
    axios
      .delete(`/api/user/${cookies.user_id}/favorites/${id}/`)
      .then((res) => {
        if (favSwitch) {
          setFavSwitch(false);
        } else {
          setFavSwitch(true);
        }
      });
  };

  const favOn = function () {
    axios.post(`/api/user/${cookies.user_id}/favorites/${id}/`).then((res) => {
      if (favSwitch) {
        setFavSwitch(false);
      } else {
        setFavSwitch(true);
      }
    });
  };

  return (
    <Container background={background} className="card">
      {favorited && (
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-icon"
          style={{
            color: "red",
            position: "absolute",
          }}
          onClick={unFav}
        />
      )}
      {!favorited && (
        <FontAwesomeIcon
          icon={faHeart}
          className="heart-icon"
          onClick={favOn}
        />
      )}
      <Link
        to={`/details/${id}`}
        style={{ textDecoration: "none", position: "absolute", bottom: "0" }}
      >
        <HeaderContainer>
          <Title>{title}</Title>
          <Subtitle>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} /> {subtitle}
          </Subtitle>
        </HeaderContainer>
      </Link>
    </Container>
  );
}
