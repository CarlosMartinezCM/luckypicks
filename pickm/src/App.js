import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code> import brains from head </code> 
        </p>
        <p>
          Muscle memory trying to flex.<br></br>
          time to upload(push) the changes I made to my github on the wBranch.<br></br>
          Now I will commit changes to branch wBranch to my git repo!!
        </p>
        <p>
          Next is creating another page and then APIs while updating the wBranch. <code>10/05/2022.</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
