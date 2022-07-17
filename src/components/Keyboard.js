import App from "../App";

function Keyboard(props) {
    var last_guess = "     ";
    if (props.guesses !==undefined)
        last_guess = props.guesses[props.guesses.length-1];

    console.log("Last guess: " + last_guess);
    var guessed_letters = CheckGuesses(props.guesses);
    console.log("guessed letters: " + guessed_letters);

    return (
        <div className="keyboard" >
            <div className="keyboard-row">
                <Key letter="Q" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="W" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="E" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="R" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="T" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="Y" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="U" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="I" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="O" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="P" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                
            </div>
            <div className="keyboard-row">
                <Key letter="A" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="S" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="D" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="F" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="G" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="H" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="J" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="K" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="L" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                
            </div>
            <div className="keyboard-row">
                <Key letter={'\u23CE'} />
                <Key letter="Z" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="X" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="C" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="V" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="B" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="N" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter="M" solution={props.solution} last_guess={last_guess} guesses={guessed_letters} />
                <Key letter={'\u232B'} />
            </div>
        </div>
    )
}

function Key(props) {
    var _class = CheckLastGuess(props.letter, props.last_guess, props.solution, props.guesses);
    // if (props.letter == "⏎")
    //     return <button type="submit" className={_class}>{props.letter}</button>
    // else
        return <button onClick={()=> PressKey(props.letter)} className={_class}>{props.letter}</button>
}

function CheckLastGuess(letter, last_guess, guesses, solution) {
    if (last_guess == null || last_guess==undefined || !guesses.includes(letter)) {
        return "key ";
    }
    else if (guesses.includes(letter) && !solution.includes(letter))
        return "key square-wrong";
    else if (guesses.includes(letter)) {
        var guess_letter_position = last_guess.indexOf(letter);
        console.log("Guess '"+letter+"' @ " + guess_letter_position);
        var solution_letter_position = solution.indexOf(letter);
        console.log("Solution '"+letter+"' @ " + solution_letter_position);

        if (guess_letter_position == solution_letter_position) {
            
            return "key square-right";
        }
        else {
            return "key square-nearby"
        }
    }
}
function CheckGuesses(guesses) {
    var g = "";
    g = Array.from(guesses).join('');
    return g;
}
function PressKey(char) {
    var _guessField = document.getElementById('new_guess');
    var _guessForm = document.getElementById('guess_form');
    var _guessRow = document.getElementById('editable-row');
    if (char === "⌫")
    {
        //clear the last editable field
        for (let i = 4; i >= 0; i--) {
            if (_guessRow.children[i] !== undefined && _guessRow.children[i].value !== ""  )
            {
                    //remove the last input value
                    _guessField.value = _guessField.value.slice(0, -1);
                    _guessRow.children[i].value="";
                    break;
            }
        }
    }
    else if (char == "⏎") {
        _guessForm.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
          );
    }  
    else
    {
        //find the first open field
        for (let i = 0; i < 5; i++) {
            if (_guessRow.children[i].value == "")
            {
                _guessRow.children[i].value=char;
                _guessField.value+=char;
                break;
            }
        }
    }
}


export default Keyboard;