import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <main>
        {/* section for content */}
      </main>
      <footer>
        {/* text or icon links to the developer’s GitHub and 
        LinkedIn profiles, and their profile on a third 
        platform (Stack Overflow, Twitter)  */}
        <link href='https://github.com/ah-fang'>GitHub</link>
        <link href='https://www.linkedin.com/in/andrea-hughes-3b1b94177/'>LinkedIn</link>
        <link href='https://twitter.com/AndreaH85273363'>Twitter</link>
      </footer>
    </div>
  );
}

export default App;
