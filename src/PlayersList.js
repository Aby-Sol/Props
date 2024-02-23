import React from 'react'
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    //Display all players by mapping through all the elemntts in the array
    <div className='list'>
        {players.map((player) => <Player player={player}/>)}
    </div>
  )
}

export default PlayersList
