import Square from "./Square";
import Button from "react";

function Row(props) {
    var _word = "     ";
    if (props.Word !== undefined && props.Word !== null)
    {
        // console.log(props.Word);
        _word = props.Word;
        // console.log(props.Word.charAt(0));
        // console.log(Gupropsess.Word.charAt(1));
        // console.log(props.Word.charAt(2));
        // console.log(props.Word.charAt(3));
        // console.log(props.Word.charAt(4));
        
    }
    // console.log("Match " + _word + " with " + props.Solution);
    // console.log(_word.charAt(0) +
    //  " =?= " + props.Solution.charAt(0) +
    //   " => " + CalcColor(_word.charAt(0), 0, props.Solution)
    // );
    
    return (<div className="d-flex justify-content-center">
            <Square className={CalcColor(_word.charAt(0), 0, props.Solution)} letter={_word.charAt(0)} edit={props.Editable} />
            <Square className={CalcColor(_word.charAt(1), 1, props.Solution)} letter={_word.charAt(1)} edit={props.Editable} />
            <Square className={CalcColor(_word.charAt(2), 2, props.Solution)} letter={_word.charAt(2)} edit={props.Editable} />
            <Square className={CalcColor(_word.charAt(3), 3, props.Solution)} letter={_word.charAt(3)} edit={props.Editable} />
            <Square className={CalcColor(_word.charAt(4), 4, props.Solution)} letter={_word.charAt(4)} edit={props.Editable} />
            <button onClick={() => activateLasers(props)} hidden={true}>
                <img src="https://e7.pngegg.com/pngimages/797/467/png-clipart-iphone-emoji-samsung-galaxy-guess-the-questions-crying-emoji-emoticon-logo-electronics-smiley.png" height={36} />
            </button>  
        </div>
    )
}
function activateLasers(props) {
    if (props.Editable) {
        console.log("pew pew pew");

    }
}

//Calculate the square color at the word level to account for "nearby" correct letters
function CalcColor(letter, letter_position, solution) {
    if(letter===" ")
        return "square-empty"
    else if(letter===solution.charAt(letter_position))
        return "square-correct"
    else if(solution.includes(letter))
        return "square-nearby"
    else
        return "square-wrong"
}

export default Row;