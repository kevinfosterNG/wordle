import {useState, useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import WordList from './wordle-words.json';
import './App.css';
import Board from './components/Board'

const WORDLE_LIST_API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';

export default function App() {
  const [solution, setSolution] = useState('');
  useEffect(() => {
    const fetchWord = async () => {
      //const response = await fetch(WORDLE_LIST_API_URL);
      const words = WordList;
      //const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord);
    };

    fetchWord();
  }, [solution]);

  const [ guesses, setGuesses] = useState([]);
  const addGuess = (word) => {
    //console.log(guesses);
    //console.log(guesses.length);
    //console.log("Adding '"+word+"' to the list of guesses");
    setGuesses( arr => [...arr, `${word}`]);
  };

  function handleSubmit(event)
  {
    event.preventDefault();
    var _guessField = document.getElementById('new_guess');
    var _guessForm =  document.getElementById('guess_form');
    var _guess = _guessField.value.toUpperCase()
    //console.log('guess:', new_guess);
    //var _guess = document.querySelectorAll('input[name=NewGuess]')[0].valueCRANE
    //console.log(_guessField);
    //console.log(_guessField.value.toUpperCase());
    if (
      IsCorrectLength(_guess) 
      //&& IsNotLastGuess(guesses)
    )
    {
      //push the guess to the list
      addGuess(_guess);
      _guessField.value="";

      if (IsCorrectAnswer(_guess, solution)) {
        console.log("You win!");
        _guessField.type="hidden";
        _guessForm.type="hidden";
      }
      else if (!IsNotLastGuess(guesses)) {
        //_guessField.type="hidden";
        _guessForm.type="hidden";
      }
    }
  }

  function IsCorrectLength(word)
  {
    return word.length === 5;
  }
  function IsNotLastGuess(guesses)
  {
    return (guesses.length<5);
  }
  function IsCorrectAnswer(word1, word2)
  {
    return (word1===word2)
  }

  function NewGame() {
    //guesses=[];
    setGuesses([]);
    setSolution('');
    var _guessField = document.getElementById('new_guess');
    var _guessForm = document.getElementById('guess_form');
    _guessForm.type="";
    _guessField.type="";
    _guessField.value="";
  }
  
  return (
    <Router basename={"/wordle"}>
      <div className="App">
        <header className="App-header">
          <div className="header-title">DIY Wordle</div>
          <div>
            Inspired by <a href="https://www.youtube.com/watch?v=5xf4_Kx7azg">This video</a>
          </div>
          <div>{WORDLE_LIST_API_URL}</div>
          <button onClick={NewGame} >New Game</button>
        </header>
        <div className="content">
          <form id="guess_form"  onSubmit={handleSubmit}>
            <label>Guess:</label>
            <input type="text" id="new_guess" name="NewGuess"  />
          </form>
          <Board data={guesses} solution={solution}  />
        </div>
        
        <footer className="footer">
          
        </footer>
        <br/>
        
      </div>
    </Router>
  );


  

}