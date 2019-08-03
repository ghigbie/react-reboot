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
            isRolling: false,
        };
        this.randomFace = this.randomFace.bind(this);
        this.roll = this.roll.bind(this);
    }
    randomFace(){
        return this.props.faces[Math.floor(Math.random()*this.props.faces.length)];
    }
    roll(){
        this.setState({
            face1: this.randomFace(),
            face2: this.randomFace(),
            isRolling: true,
        });
        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 900);
    }
    render(){
        return (
            <div className="RollDice">
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
                    className="roll-button"
                    disabled={this.state.rolling}
                    onClick={this.roll}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice' }
                </button>
            </div>
        );
    }
}

export default RollDice;