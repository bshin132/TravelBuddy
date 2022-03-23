import React from "react";
import styled from "styled-components";
import './SearchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
`;

const Input = styled.input`
  width: 400px;
  height: 25px;
  border: none;
  border-radius: 7px;
  font-size: 12px;
  color: #8D8EA6;
  padding-left:30px;
`;

export default function SearchBar() {
  return (
    <Container>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <Input placeholder="Search for a destination..." />
    </Container>
  );
}
