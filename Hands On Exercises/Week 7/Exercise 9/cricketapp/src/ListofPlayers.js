import React from 'react';
import players from './PlayersData';

function ListofPlayers(){
  const lowScorers = players.filter(player => player.score < 70);

  return(
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player,index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score less than 70</h3>
      <ul>
        {lowScorers.map((player,index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;