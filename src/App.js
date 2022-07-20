import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://github.com/MrKrishnaAgarwal/deploy-react-app-to-gh-pages"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing my GitHub Action
        </a>
      <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Made by @MrKrishnaAgarwal
        </p>
      </header>
    </div>
  );
}

export default App;
