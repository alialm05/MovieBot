import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./Clapper-icon.png' className="App-logo" alt="logo" />
        <p>
          A Discord Bot for finding out upcoming Movies!
        </p>
        <a
          className="App-link"
          href="https://discord.com/oauth2/authorize?client_id=1240749734680072253&permissions=52948357138512&scope=bot"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className='btn btn-primary btn-lg active'>
          Invite to your Server  
          </button>
        
        
        </a>
      </header>
    </div>
  );
}

export default App;
