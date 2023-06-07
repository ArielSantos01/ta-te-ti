import { useState } from 'react';
import Player from './components/Player';
import Board from './components/Board';
import EntryForm from './components/EntryForm';
import './App.css';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  function handleStartGame(namePlayer1, namePlayer2) {
    setPlayer1(namePlayer1);
    setPlayer2(namePlayer2);
  }

  return (
    <div className='app'>
      {!player1 || !player2 ? ( <EntryForm onStartGame={handleStartGame} />) : 
        (<>
          <Board player1={player1} player2={player2}/>                          
          <div className='players'>
            <Player num='1' name={player1}/>
            <Player num='2' name={player2} />
          </div>
        </>
        )
      }
    </div>
  );
}

export default App;
