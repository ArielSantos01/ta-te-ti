import '../stylesheets/Player.css'

function Player (props) {

    return(
        <div className='player'>
            Jugador {props.num}: {props.name}
        </div>
    );
}

export default Player;