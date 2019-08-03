import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {
            number1: 1,
            number2: 2,
        };
        this.randomNumber = this.randomNumber.bind(this);
        this.rollDice = this.rollDice.bind(this);
    }
    randomNumber(){
        return Math.floor(Math.random()*6)+1;
    }
    rollDice(){
        this.setState({
            number1: this.randomNumber(),
            number2: this.randomNumber(),
        })
    }
    render(){
        return (
            <div>
                <div className="dice-container">
                    <Die 
                        className="die"
                        number={this.state.number1}/>
                    <Die
                        className="die"
                        number={this.state.number2} />
                </div>
                <br/>
                <br/>
                <button
                    onClick={this.rollDice}>
                    Roll Dice
                </button>
            </div>
        );
    }
}

export default RollDice;