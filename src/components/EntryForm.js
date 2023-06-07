import React, { useState } from 'react';
import '../stylesheets/EntryForm.css'

function EntryForm({ onStartGame }) {
  
  const [namePlayer1, setNamePlayer1] = useState('');
  const [namePlayer2, setNamePlayer2] = useState('');

  //actualizar nombres cuando cambia el contenido de los input
  const handleNamePlayer1Change = (event) => {
    setNamePlayer1(event.target.value);
  };

  const handleNamePlayer2Change = (event) => {
    setNamePlayer2(event.target.value);
  };

  const handleStartGameClick = () => {
    if (namePlayer1 && namePlayer2) {
      onStartGame(namePlayer1, namePlayer2);
    }
  };

  return (
    <div className='form-game'>
      <h2>TA - TE - TI</h2>
      <label>Nombre Jugador 1:</label>
      <input type="text" onChange={handleNamePlayer1Change}/>

      <label>Nombre Jugador 2:</label>
      <input type="text" onChange={handleNamePlayer2Change}/>
      
      <button onClick={handleStartGameClick}>Iniciar juego</button>
    </div>
  );
}
export default EntryForm;