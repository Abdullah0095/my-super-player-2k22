import React, { useState } from 'react';
import playersData from '../PlayersData/PlayersData';
import './PlayerDisplay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PlayerDisplay = () => {

    const [players, setPlayers] = useState(playersData);

    return (
        <div>
            {
                players.map(player => <PlayerList player={player}></PlayerList>)    
            }    
        </div>
    );
    
    }

    const PlayerList = (props) => {
        console.log(props.player)
        return(
            <div id='playerCard'>
                <img src={props.player.url} alt="" />
                <h1>{props.player.name}</h1>
                <h3>{props.player.role}</h3>
                <p>AGE: {props.player.age}</p>
                <p>ACHIEVEMENT: {props.player.achievement}</p>
                <p>SALARY: {props.player.salary}</p>
                <button id='cartbtn'><FontAwesomeIcon icon={['fas', '']} />Add to cart</button>
                
                
            </div>

        );
};

export default PlayerDisplay;