import {useState, useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import WordList from './wordle-words.json';
import './App.css';
import Board from './components/Board'

export default function App() {
  const [solution, setSolution] = useState('');
  function fetchWord() {
    const words = WordList;
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord);
  }
  useEffect(() => {
    fetchWord();
  }, []);

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
    if (
      IsCorrectLength(_guess) 
      //&& IsNotLastGuess(guesses)
    )
    {
      console.log("Guess #" + (guesses.length));
      //push the guess to the list
      addGuess(_guess);
      _guessField.value="";

      if (IsCorrectAnswer(_guess, solution)) {
        console.log("You win!");
        _guessField.type="hidden";
        _guessForm.type="hidden";
      }
      else if (!IsNotLastGuess(guesses)) {
        _guessField.type="hidden";
        _guessForm.type="hidden";
        var _answer = document.getElementById('answer');
        _answer.innerHTML="Answer: " + solution;
      }
    }
  }

  function IsCorrectLength(word)
  {
    return word.length === 5;
  }
  function IsNotLastGuess(guesses)
  {
    //if (guesses.length<5)
      //console.log(5-guesses.length + " more guesses...");
    
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
    fetchWord();
    var _answer = document.getElementById('answer');
    _answer.innerHTML="";
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
          <div id="answer"></div>
        </footer>
        <br/>
        
      </div>
    </Router>
  );


  

}