import './App.css';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import DestinationCard from './components/DestinationCard/DestinationCard';

function App() {
  return (
    <div className="App">
      <Button label="Generate New" type="defaultButton"/>
      <SearchBar />
      <DestinationCard title="Whistler Village" subtitle="Whistler, B.C."  background="/whistler.jpg"/>
    </div>
  );
}

export default App;
