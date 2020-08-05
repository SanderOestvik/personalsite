import React from 'react';
import Dice from './dice.js';

class Game extends React.Component {
    render() {
        return (
            <div>
                <p>Yatzy</p>
                <Dice></Dice>
            </div>
        )

    }
}

export default Game;