import React, { Component } from 'react';
//import './Cliker.css';

class Clicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0
        };
        this.selectRandomNumber = this.selectRandomNumber.bind(this);
    }

    selectRandomNumber = () => {
        return Math.floor(Math.random() * this.props.limit )
    }

    render(){
        return(
            <div>
                <h1>Number is {this.state.number}</h1>
                <br/>
                <br/>
                <button onClick={this.selectRandomNumber}>Select Random Number</button>
            </div>
        );
    }
}

export default Clicker;