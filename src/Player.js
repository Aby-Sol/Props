import React from 'react'
import './card.css'

const Player = ({player}) => {
  return (
    /*De-structure the attributes for the Player component.*/

    <div className="wrapper">
      {/* *** fut-player-card ****/}
      <div className="fut-player-card">
        {/* Player Card Top*/}
        <div className="player-card-top">
          <div className="player-master-info">
            <div className="player-rating">
              <span>{player.rating}</span>
            </div>
            <div className="player-position">
              <span>{player.position}</span>
            </div>
            <div className="player-nation">
              <img
                src={player.nationality}
                draggable="false"
              />
            </div>
            <div className="player-club">
              <img
                src={player.team}
                draggable="false"
              />
            </div>
          </div>
          <div className="player-picture">
            <img
              src={player.image}
              alt={player.name}
              draggable="false"
            />
            <div className="player-extra">
              <span>{player.age}</span>
          
            </div>
          </div>
        </div>
        {/* Player Card Bottom*/}
        <div className="player-card-bottom">
          <div className="player-info">
            {/* Player Name*/}
            <div className="player-name">
              <span>{player.name}</span>
            </div>
            {/* Player Features*/}
            <div className="player-features">
              <div className="player-features-col">
                  
                <span>
                  <div className="player-feature-value">  {player.speed}</div>
                  <div className="player-feature-title">PAC</div>
                </span>
                <span>
                  <div className="player-feature-value">{player.shooting}</div>
                  <div className="player-feature-title">SHO</div>
                </span>
                <span>
                  <div className="player-feature-value">{player.passing}</div>
                  <div className="player-feature-title">PAS</div>
                </span>
              </div>
              <div className="player-features-col">
                <span>
                  <div className="player-feature-value">{player.dribbling}</div>
                  <div className="player-feature-title">DRI</div>
                </span>
                <span>
                  <div className="player-feature-value">{player.defense}</div>
                  <div className="player-feature-title">DEF</div>
                </span>
                <span>
                  <div className="player-feature-value">{player.physique}</div>
                  <div className="player-feature-title">PHY</div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

Player.defaultProps={    
    name: "L. HORAN", 
    team:"https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/womens-ratings/common/team-logo/116033.png", 
    nationality:"https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/ratings-collective/f20assets/country-flags/95.png", 
    jerseyNumber:"", 
    age:29 ,
    image:"https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/womens-ratings/headshots/231432.png", 
    position:'CM', 
    rating:86 ,
    speed:79 , 
    shooting:86 , 
    passing:86 , 
    dribbling:84 , 
    defense:63 , 
    physique:79 }


export default Player