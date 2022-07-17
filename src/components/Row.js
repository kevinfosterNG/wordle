import Square from "./Square";

function Row(props) {
    var _word = "     ";
    if (props.Word !== undefined && props.Word !== null)
        _word = props.Word;
    
    return (<div id={props.Editable ? "editable-row" : ""} className="d-flex justify-content-center">
            <Square className={CalcColor(_word.charAt(0), 0, props.Solution)} letter={_word.charAt(0)} edit={props.Editable} />
            <Square className={CalcColor(_word.charAt(1), 1, props.Solution)} letter={_word.charAt(1)} edit={props.Editable} />
            <Square className={CalcColor(_word.charAt(2), 2, props.Solution)} letter={_word.charAt(2)} edit={props.Editable} />
            <Square className={CalcColor(_word.charAt(3), 3, props.Solution)} letter={_word.charAt(3)} edit={props.Editable} />
            <Square className={CalcColor(_word.charAt(4), 4, props.Solution)} letter={_word.charAt(4)} edit={props.Editable} />
        </div>
    )
}
function activateLasers(props) {
    if (props.Editable) {
        console.log("pew pew pew");

    }
}

//Calculate the square color at the word level to account for "nearby" correct letters
export function CalcColor(letter, letter_position, solution) {
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