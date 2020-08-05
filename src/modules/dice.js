import React from 'react';
import '../App.css'

function Die(props) {
    return (
    <button> {props.value}</button>
    )
};

class Dice extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            dieValues: ["1", "1", "1", "1", "2"]//Array(5).fill("1")
        }
    }

    rollDice() {
        const newThrow = [];
        for (let i = 0; i < this.state.dieValues.length; i++) {
            let newDie = getRandomInt(6) + 1
            newThrow.push(newDie);
        }
        this.setState({
            dieValues: newThrow
        })
    }

    render() {
        return (
            <div>
            <div>
                <Die value={this.state.dieValues[0]}></Die>
                <Die value={this.state.dieValues[1]}></Die>
                <Die value={this.state.dieValues[2]}></Die>
                <Die value={this.state.dieValues[3]}></Die>
                <Die value={this.state.dieValues[4]}></Die>
                <button className="Rollbutton" onClick={() => this.rollDice()} >{"Roll"}</button>
            </div>
            <div>{"Current throw: " + this.state.dieValues.toString()}</div>
            </div>
        )
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export default Dice;