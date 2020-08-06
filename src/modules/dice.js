import React from 'react';
import '../App.css'

function Die(props) {
    return (
    <button className={props.class} onClick={props.onClick}> {props.value}</button>
    )
};

class Dice extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            dieValues: ["1", "1", "1", "1", "2"],//Array(5).fill("1")
            keptDie: [false, false, false, false, false]
        }
    }

    rollDice() {
        const newThrow = [];
        for (let i = 0; i < this.state.dieValues.length; i++) {
            let newDie;
            if(this.state.keptDie[i]){ 
                newDie = this.state.dieValues[i];
            } else {
                newDie = getRandomInt(6) + 1
            }
            newThrow.push(newDie);
        }
        this.setState({
            dieValues: newThrow
        })
    }

    dieClick(num) {
        const newKeptDie = this.state.keptDie.slice();
        for (let i = 0; i < newKeptDie.length; i++) {
            if (i === num) {
                newKeptDie[i] = !newKeptDie[i]; 
            }
        }
        this.setState({
            keptDie: newKeptDie
        });
    }

    getDieColor(i) {
        if (this.state.keptDie[i]) {
            return "red";
        }
        return "normal";
    }

    resetDice() {
        this.setState({
            dieValues: ["1", "1", "1", "1", "2"],//Array(5).fill("1")
            keptDie: [false, false, false, false, false]
        })
    }

    render() {
        return (
            <div>
            <div>
                <Die onClick={() => this.dieClick(0)}  value={this.state.dieValues[0]} class={this.getDieColor(0)}></Die>
                <Die onClick={() => this.dieClick(1)}  value={this.state.dieValues[1]} class={this.getDieColor(1)}></Die>
                <Die onClick={() => this.dieClick(2)}  value={this.state.dieValues[2]} class={this.getDieColor(2)}></Die>
                <Die onClick={() => this.dieClick(3)}  value={this.state.dieValues[3]} class={this.getDieColor(3)}></Die>
                <Die onClick={() => this.dieClick(4)}  value={this.state.dieValues[4]} class={this.getDieColor(4)}></Die>
                <button className="Rollbutton" onClick={() => {this.rollDice(); this.props.onRollClick()}} >{"Roll"}</button>
                <button className="Rollbutton" onClick={() => this.resetDice()} >{"Reset"}</button>
            </div>
            {/* <div>{"Current throw: " + this.state.dieValues.toString()}</div> */}
            </div>
        )
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export default Dice;