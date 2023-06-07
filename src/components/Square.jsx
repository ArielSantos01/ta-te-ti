import '../stylesheets/Square.css';

function Square ({ value, onSquareClick }) {

    let squareClass = `square--${value}`

    return(
        <button className={`${'square'} ${squareClass} `} onClick={onSquareClick}>
            
        </button>
    );
}

export default Square;