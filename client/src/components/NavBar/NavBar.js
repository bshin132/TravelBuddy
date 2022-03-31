import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { faMap, faHouse, faHeart } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  margin-top: 180px;
`;

const Navs = styled.div`
`;

export default function NavBar({}) {
  return (
    <NavContainer>
      <Logo />
      <Navs>
        <Nav
          icon={faHouse}
          iconColor="#3E8F7D"
          label="Home"
          fontWeight="bold"
          textColor="#3E8F7D"
          to="/"
        />
        <Nav
          icon={faMap}
          iconColor="#3E8F7D"
          label="Random"
          fontWeight="bold"
          textColor="#3E8F7D"
          to="/random"
        />
        <Nav
          icon={faHeart}
          iconColor="#3E8F7D"
          label="Favorites"
          fontWeight="bold"
          textColor="#3E8F7D"
          to="/favorites"
        />
      </Navs>
    </NavContainer>
  );
}
