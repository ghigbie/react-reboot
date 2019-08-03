import React, { Component } from 'react';
//import './Cliker.css';

class Clicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            isWinner: false,
        };
        this.selectRandomNumber = this.selectRandomNumber.bind(this);
        // this.showMessage = this.showMessage.bind(this);
    }

    selectRandomNumber(){
        console.log('select called');
        const random = Math.floor(Math.random() * this.props.limit)+1;
        this.setState({number: random});
    }
    // showMessage(){
    //     console.log('show message called');
    //     if(this.props.win = this.state.number){
    //         return (<h1>You win!</h1>);
    //     }
    // }

    render(){
        return(
            <div>
                <h1>Number is {this.state.number}</h1>
                <br/>
                {this.isWinner && <h1>You win!</h1>}
                <br/>
                {!this.isWinner && <button onClick={this.selectRandomNumber}>Select Random Number</button>}
            </div>
        );
    }
}

export default Clicker;