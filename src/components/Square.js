
function Square(square) {
    //console.log(square);
    //var square = square.letter || "";
    //console.log(square.className);
    //console.log(square.edit);
    if (square.edit)
        return (
            <input className="square" type="text" maxLength={1} onChange={() => uppercaseletters(this)} />
        )
        //onClick={() => addGuess('CRANE')} 
    else
        return (
            <div className={"square "+ square.className}>{square.letter}</div>
        )
}
function uppercaseletters(letter)
{
    console.log(letter);
    return "A";
}
export default Square;