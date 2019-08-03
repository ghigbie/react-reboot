import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{
    static defaultProps = {
        faces: ['one', 'two', 'three', 'four', 'five', 'six'],
    }
    constructor(props){
        super(props);
        this.state = {
            face1: 'two',
            face2: 'three',
        };
        this.randomNumber = this.randomNumber.bind(this);
        this.rollDice = this.rollDice.bind(this);
    }
    randomFace(){
        return this.defaultProps.faces[Math.floor(Math.random()*6)+1];
    }
    rollDice(){
        this.setState({
            number1: this.randomFace(),
            number2: this.randomFace(),
        })
    }
    render(){
        return (
            <div>
                <div className="dice-container">
                    <Die 
                        className="die"
                        face={this.state.face1}/>
                    <Die
                        className="die"
                        face={this.state.face2} />
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