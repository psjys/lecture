import './App.css';
import HangMan from './subModule/HangMan';

function App() {
  
  
  return (
    <>
      <h1>Welcome to Hangman!</h1>
      <div>
        <h3>Do you want to play game?</h3>
        <div>
          <HangMan word = "react" />
          <input type="text"
          />
          <button>Set HiddenWord</button>
        </div>
      </div>
    </>
  );
}

export default App;