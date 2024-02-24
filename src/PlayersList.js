import React from 'react'
import { useState } from 'react';
import Player from "./Player";
import players from "./players";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const PlayersList = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)};
  return (
    //Display all players by mapping through all the elemntts in the array
    
    <div className='list'>
      <Carousel activeIndex={index} onSelect={handleSelect}  style={{width:500, height:550}}>
      {players.map((player) =>  <Carousel.Item> <Player player={player}/> </Carousel.Item>)}
      </Carousel>
    </div>
  )
}

export default PlayersList
