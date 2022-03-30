import React, { useEffect, useState } from "react";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterButton from "../../components/FilterButton/FilterButton";
import styled from "styled-components";
import axios from "axios";
import Logo from "../../components/Logo/Logo";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
  width: 98%;
`;

const SearchContainer = styled.div``;

const FilterContainer = styled.div`
  margin-left: 10px;
  display: flex;
  overflow-x: scroll;
  padding: 10px;
`;

const Main = styled.div`
  width: 97%;
  height: 87%;
  background-color: white;
  border-radius: 10px;
  margin: 15px;
  padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function Homepage({}) {
  const [destinations, setDestinations] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [province, setProvince] = useState("");
  const [cookies, setCookie] = useCookies(["user_id"]);
  const [favSwitch, setFavSwitch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/destinations/`).then((res) => {
      setDestinations(res.data);
      axios.get(`/api/user/${cookies.user_id}/favorites`).then((resp) => {
        setFavorites(resp.data);
      });
    });
  }, [favSwitch]);

  const onFilter = (search, province) => {
    setSearch(search);
    setProvince(province);
    return destinations.filter((destination) => {
      if (search && !destination.name.toLowerCase().includes(search)) {
        return false;
      }
      if (province && !destination.province_short.includes(province)) {
        return false;
      }
      return true;
    });
  };

  const destinationList = (
    search.length > 0 || province ? filter : destinations
  ).map((destination) => {
    const favorited = (favorites.find(dest => dest.id === destination.id) ? true : false);
    return (
      <DestinationCard
        title={destination.name}
        subtitle={destination.province}
        background={destination.photo}
        key={destination.id}
        id={destination.id}
        favorited={favorited}
        favSwitch={favSwitch}
        setFavSwitch={setFavSwitch}
        onClick={() => navigate(`/details/${destination.id}`)}
      />
    );
  });

  const filterByProvinces = [
    { label: "AB", value: "AB" },
    { label: "BC", value: "BC" },
    { label: "SK", value: "SK" },
    { label: "MB", value: "MB" },
    { label: "ON", value: "ON" },
    { label: "QC", value: "QC" },
    { label: "NB", value: "NB" },
    { label: "NS", value: "NS" },
    { label: "PE", value: "PE" },
    { label: "NL", value: "NL" },
    { label: "NT", value: "NT" },
    { label: "YT", value: "YT" },
    { label: "NU", value: "NU" },
    { label: "All", value: "" },
  ];

  const filterProvinceButtons = filterByProvinces.map((item) => {
    return (
      <FilterButton
        onClick={() => {
          setFilter(onFilter(search, item.value));
        }}
        isActive={item.value === province}
        {...item}
        key={item.label}
      />
    );
  });

  return (
    <MainContainer>
      <NavContainer>
        <Logo />
        <NavBar />
      </NavContainer>

      <MainContent>
        <HeaderContainer>
          <SearchContainer>
            <SearchBar
              search={search}
              setSearch={(search) => {
                setFilter(onFilter(search.toLowerCase(), province));
              }}
            />
          </SearchContainer>
          <FilterContainer>{filterProvinceButtons}</FilterContainer>
        </HeaderContainer>

        <Main>{destinationList}</Main>
      </MainContent>
    </MainContainer>
  );
}
