import React, { Component } from 'react';
//import './Cliker.css';

class Clicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0,
        };
        this.selectRandomNumber = this.selectRandomNumber.bind(this);
        this.reset = this.reset.bind(this);
    }

    selectRandomNumber(){
        console.log('select called');
        const random = Math.floor(Math.random() * this.props.limit)+1;
        this.setState({number: random});
    }
    reset = () => {
        this.setState({number: 0});
    }

    render(){
        return(
            <div>
                <h1>Number is {this.state.number}</h1>
                <br/>

                {this.state.number === this.props.win
                    ? <div>
                      <h1>You win!</h1> 
                      <button
                        onClick={this.reset}>
                        Reset
                      </button>
                      </div>
                    : <button 
                        onClick={this.selectRandomNumber}>
                        Select Random Number
                    </button>}
            </div>
        );
    }
}

export default Clicker;