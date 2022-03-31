import React from "react";
import styled from "styled-components";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 600px;
  height: 30px;
  border: none;
  border-radius: 7px;
  border: 1px solid #3e8f7d;
  font-size: 12px;
  color: #8d8ea6;
  padding-left: 30px;
  font-family: "Outfit", sans-serif;
  &:focus {
    outline: none !important;
    border: 2px solid #3e8f7d;
  }
`;

export default function SearchBar({ search, setSearch }) {
  return (
    <Container>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <Input
        placeholder="Search for a destination..."
        search={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </Container>
  );
}
