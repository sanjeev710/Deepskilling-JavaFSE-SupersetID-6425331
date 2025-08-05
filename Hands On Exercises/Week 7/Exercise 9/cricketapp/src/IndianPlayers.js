import React from 'react';
import players from './PlayersData';

function IndianPlayers()
{
  const allPlayers = players;

  const oddPlayers = allPlayers.filter((_,index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_,index) => index % 2 === 0);

  const[odd1, odd2, odd3, ... restOdd] = oddPlayers;
  const[even1, even2, even3,... restEven] = evenPlayers;

  const T20Players = allPlayers.slice(0, 5);
  const RanjiPlayers = allPlayers.slice(5);
  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return(
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>{odd1.name}</li>
        <li>{odd2.name}</li>
        <li>{odd3.name}</li>
        {restOdd.map((players, index) => (
          <li key={index}>{players.name}</li>
        ))}
      </ul>

      <h2>Even Players</h2>
      <ul>
        <li>{even1.name}</li>
        <li>{even2.name}</li>
        <li>{even3.name}</li>
        {restEven.map((players,index) => (
        <li key={index}>{players.name}</li>
        ))}
      </ul>


      <h2>Merged T20 Players and Ranji Players</h2>
      <ul>
        {mergedPlayers.map((player,index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;