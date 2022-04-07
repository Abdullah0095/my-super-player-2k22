import React, { useState } from 'react';
import playersData from '../PlayersData/PlayersData';
import './PlayerDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';






const PlayerDisplay = () => {

    const [players, setPlayers] = useState(playersData);
    const [cart, setCart] = useState([])

    const handleAddPlayer = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);
    }


    return (
        <div >
            <div style={{ width: '80%' }}>
            {
                players.map(player => <PlayerList
                    key={player.key}
                    player={player}
                    addPlayer={handleAddPlayer}
                     >

                     </PlayerList>)
            }
            </div>
            

            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );

}

const PlayerList = (props) => {
    // console.log(props.player)
    return (
        <div id='playerZone'>

            <div id='playerCard'>
                <img src={props.player.url} alt="" />
                <h1>{props.player.name}</h1>
                <h3>{props.player.role}</h3>
                <p>AGE: {props.player.age}</p>
                <p>ACHIEVEMENT: {props.player.achievement}</p>
                <p>SALARY: {props.player.salary} BDT</p>
                <button id='cartBtn' onClick={() => props.addPlayer(props.player)}>
                    <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
                    Add to cart
                </button>
            </div>
        </div>


    );
};

export default PlayerDisplay;