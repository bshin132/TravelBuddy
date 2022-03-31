import React from "react";
import styled from "styled-components";
import './SearchBar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
`;

const Input = styled.input`
  width: 600px;
  height: 30px;
  border: none;
  border-radius: 7px;
  font-size: 12px;
  color: #8D8EA6;
  padding-left:30px;
  font-family: "Outfit", sans-serif;
`;

export default function SearchBar({search, setSearch}) {
  return (
    <Container>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <Input placeholder="Search for a destination..." search={search} onChange={event => setSearch(event.target.value)}/>
    </Container>
  );
}
