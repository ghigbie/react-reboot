import React, { Component } from 'react';
import './Die.css';

class Die extends Component{
    render(){
        const props = this.props;
        return (
            <div>
                <h1>Dice {props.number} </h1>
            </div>
        )
    }
}

export default Die;