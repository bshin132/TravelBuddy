import "./App.scss";
import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";
import DestinationCard from "./components/DestinationCard/DestinationCard";
import Nav from "./components/Nav/Nav";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import ItemBanner from "./components/ItemBanner/ItemBanner";
import Image from "./components/Image/Image";
import Stop from "./components/Stop/Stop";
import FilterButton from "./components/FilterButton/FilterButton";
import RandomCard from "./components/RandomCard/RandomCard";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./pages/Details/Details";
import Random from "./pages/Random/Random";
import NavBar from "./components/NavBar/NavBar";
import { render } from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="random" element={<Random />} />
          {/* <Route path="/favortie" element={<Favorite />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Button label="Generate New" type="defaultButton"/>
<Button icon="arrowLeft" type="backButton"/>
<SearchBar />
<DestinationCard title="Whistler Village" subtitle="Whistler, B.C."  background="/whistler.jpg"/>
<Nav icon={faHouse} iconColor="#3E8F7D" label="Dashboard" fontWeight="bold" textColor="#3E8F7D"/>
<InfoBanner />
<ItemBanner icon={faBookmark} title="Camera"/>
<Image background="/whistler.jpg"/>
<Stop stop="Stop 1" description="Visit the wonderful land of whistler"/>
<FilterButton type="filterActive" label="AB"/>
<FilterButton type="notActive" label="BC"/>
<RandomCard title="Whistler Village" subtitle="Whistler, B.C."  background="/whistler.jpg" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" /> */
}
