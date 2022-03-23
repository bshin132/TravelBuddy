import './App.css';
import Button from './components/Button/Button';
import DestinationCard from './components/DestinationCard/DestinationCard';

function App() {
  return (
    <div className="App">
      <Button label="Generate New" type="defaultButton"/>
      <Button label="icon" type="backButton"/>
    </div>
  );
}

export default App;
