import Search from "./Search";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className= "container">
      <header className="App-header">
      <i className="fas fa-book-reader"></i>
      <h1 className="mb-5">Dictionary</h1>
      </header>
      <Search />
      <br />
      <footer>
        Coded by Laura Braun. Open source on <a href="https://github.com/LauraBraun/dictionary-app" target="_blank" rel="noreferrer">Git-Hub</a>.
      </footer>
      </div>
    </div>
  );
}

export default App;
