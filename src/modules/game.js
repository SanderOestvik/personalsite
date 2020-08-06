import React from 'react';
import Dice from './dice.js';
import Board from './board.js';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.yatzyCategories = ["Ones", "Twos", "Threes", "Fours", "Fives", "Sixes","Bonus", "One pair", "Two pairs",
         "Three of a kind", "Four of a kind", "Small straight", "Large straight", "House", "Chance", "Yatzy"];
        this.state = {
            description: "Welcome to yatzy",
            throwsLeft: 3,
            currentCategory: 0,
        }
    }

    decrementThrows() {
        if (this.state.throwsLeft === 0) {
            this.setState({throwsLeft: 3});
            this.incrementCategory();
        } else {
            this.setState({throwsLeft: this.state.throwsLeft -1});
        }
    }

    incrementCategory(){
        if (this.state.currentCategory <= this.yatzyCategories.length) {
            this.setState({currentCategory: this.state.currentCategory +1})
        }
    }

    render() {
        return (
            <div>
                <p>Yatzy</p>
                <p>{this.state.description}</p>
                <p>{"You are currently aiming for: " + this.yatzyCategories[this.state.currentCategory] + ". You have " + this.state.throwsLeft + " throws left this round"}</p>
                <Dice onRollClick={() => this.decrementThrows()}></Dice>
                <Board></Board>
            </div>
        )

    }
}

export default Game;