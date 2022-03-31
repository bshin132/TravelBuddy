import "./App.scss";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./pages/Details/Details";
import Random from "./pages/Random/Random";
import Favorites from "./pages/Favorites/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const {REACT_APP_MAPS_API_KEY} = process.env;
console.log(REACT_APP_MAPS_API_KEY);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login/:user_id" element={<Login />}/>
          <Route index element={<Homepage />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="random" element={<Random />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
