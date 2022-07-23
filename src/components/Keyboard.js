import App from "../App";
import {useState, useEffect} from "react";

function changeColors(keyColor, guess, solution) {
    //console.log("changeColors() started...");

    if (guess !== undefined && guess !== "")
    {
        for (let i = 0; i < 5; i++) {
            let c = guess.charAt(i).toUpperCase();
            console.log(c);

            //var index = keyColor.index(c);
            console.log(keyColor[c] + '->' + keyColor[c].value);

            if (solution.charAt(i) === c)
                keyColor[c] = "square-correct";
            else if (!solution.includes(c))
                keyColor[c] = "square-wrong";
            else if (solution.includes(c))
            keyColor[c] = "square-nearby";
        }
    }
    else {
        console.log('resetting...');
        //why doesn't this work?
        //keyColor=blankKeyboard;

        //hacky workaround to reset the keybaord...
        for (let i = 0; i < 26; i++) {
            var c = String.fromCharCode(65 + i); //start at A loop to Z
            keyColor[c] = "";
        }
    }
    //console.log("changeColors() completed...");
}

const blankKeyboard = {
    A : "",
    B : "",
    C : "",
    D : "",
    E : "",
    F : "",
    G : "",
    H : "",
    I : "",
    J : "",
    K : "",
    L : "",
    M : "",
    N : "",
    O : "",
    P : "",
    Q : "",
    R : "",
    S : "",
    T : "",
    U : "",
    V : "",
    W : "",
    X : "",
    Y : "",
    Z : ""
};

function Keyboard(props) {
    var last_guess = props.newguess;
    //console.log( last_guess);

    const [keyColor, setKeyColor] = useState(blankKeyboard);
    
    changeColors(keyColor, last_guess, props.solution);

    return (
        <div className="keyboard" >
            <div className="keyboard-row">
                <Key letter="Q" class={keyColor.Q}  />
                <Key letter="W" class={keyColor.W} />
                <Key letter="E" class={keyColor.E} />
                <Key letter="R" class={keyColor.R} />
                <Key letter="T" class={keyColor.T} />
                <Key letter="Y" class={keyColor.Y} />
                <Key letter="U" class={keyColor.U} />
                <Key letter="I" class={keyColor.I} />
                <Key letter="O" class={keyColor.O} />
                <Key letter="P" class={keyColor.P} />
            </div>
            <div className="keyboard-row">
                <Key letter="A" class={keyColor.A} />
                <Key letter="S" class={keyColor.S} />
                <Key letter="D" class={keyColor.D} />
                <Key letter="F" class={keyColor.F} />
                <Key letter="G" class={keyColor.G} />
                <Key letter="H" class={keyColor.H} />
                <Key letter="J" class={keyColor.J} />
                <Key letter="K" class={keyColor.K} />
                <Key letter="L" class={keyColor.L} />
            </div>
            <div className="keyboard-row">
                <Key letter={'\u23CE'} />
                <Key letter="Z" class={keyColor.Z} />
                <Key letter="X" class={keyColor.X} />
                <Key letter="C" class={keyColor.C} />
                <Key letter="V" class={keyColor.V} />
                <Key letter="B" class={keyColor.B} />
                <Key letter="N" class={keyColor.N} />
                <Key letter="M" class={keyColor.M} />
                <Key letter={'\u232B'} />
            </div>
        </div>
    )
}

function Key(props) {
    var _class = "key " + props.class;
    return <button onClick={()=> PressKey(props.letter)} className={_class}>{props.letter}</button>
}

function PressKey(char) {
    var _guessField = document.getElementById('new_guess');
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
        var _guessForm = document.getElementById('guess_form');
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