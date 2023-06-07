import '../stylesheets/Score.css'
function Score ({ value }){

    return(
        <div className='score'>
            {value}
        </div>
    );

}
export default Score;