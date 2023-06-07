import { useState, useEffect } from "react";
import Square from "./Square";
import Score from "./Score";
import '../stylesheets/Board.css'


function Board ({ player1, player2}) {

    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            if (squares[a] === 'X'){
                return player1;
            }else{
                return player2;
            }
                
          }
        }
        
        return null;
      }
    
    function handleClick(numSquare) {
        if (calculateWinner(squares) || squares[numSquare]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[numSquare] = 'X';
        }else{
            nextSquares[numSquare] = 'O';
        }
          setSquares(nextSquares);
          setXIsNext(!xIsNext);
        }
    
    function cleanBoard() {
        setSquares(Array(9).fill(null));
    }

    useEffect(() => {
        const winner = calculateWinner(squares);
        if (winner) {
            if (winner === player1) {
            setScore1(score1 + 1);
            }else {
            setScore2(score2 + 1);
            }
        }
          }, [squares]);

    const winner = calculateWinner(squares) ;
    let status;
    if (winner) {
        status = 'Ganador: ' + winner +'!!!';
    } else {
        if (squares.every((square) => square !== null)) {
            status = 'Hubo un empate'
          }else{
            status = 'Es el turno de ' + (xIsNext ? player1 : player2);
            }
        }      

    return(
        <div className='board'>
            <h1>TA - TE - TI</h1>
            <div className="status">{status}</div>
            <div className="row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>

            <div className="row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>

            <div className="row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
            
            <button onClick={cleanBoard}>
                Limpiar tablero
            </button>

            <div className='scores'>
                <Score value={score1}/>
                <Score value={score2}/>
            </div>
            

        </div>
    );
}

export default Board;