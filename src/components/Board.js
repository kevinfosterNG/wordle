import Row from "./Row";


function Board(props) {
    return (
        <div >
            <Row Editable={IsEditable(props.data, 0)} Word={props.data[0]} Solution={props.solution}/>
            <Row Editable={IsEditable(props.data, 1)} Word={props.data[1]} Solution={props.solution}/>
            <Row Editable={IsEditable(props.data, 2)} Word={props.data[2]} Solution={props.solution}/>
            <Row Editable={IsEditable(props.data, 3)} Word={props.data[3]} Solution={props.solution}/>
            <Row Editable={IsEditable(props.data, 4)} Word={props.data[4]} Solution={props.solution}/>
            <Row Editable={IsEditable(props.data, 5)}  Word={props.data[5]} Solution={props.solution}/>
        </div>
    )
}
function IsEditable(guesses, row_number) {
    //console.log(guesses)
    //console.log(guesses.length || 0);
    if (guesses.length === row_number) {
        //console.log("edit row " + row_number);
        return true;
    }
    else return false;
}


export default Board;