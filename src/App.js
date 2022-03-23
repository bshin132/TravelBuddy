import './App.css';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import DestinationCard from './components/DestinationCard/DestinationCard';
import Nav from './components/Nav/Nav';
import { faBookmark, faHouse } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Button label="Generate New" type="defaultButton"/>
      <SearchBar />
      <DestinationCard title="Whistler Village" subtitle="Whistler, B.C."  background="/whistler.jpg"/>
      <Nav icon={faHouse} iconColor="#3E8F7D" label="Dashboard" fontWeight="bold" textColor="#3E8F7D"/>
    </div>
  );
}

export default App;
