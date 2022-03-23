import './App.css';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Button label="Generate New" type="defaultButton"/>
      <SearchBar />
    </div>
  );
}

export default App;
