import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';


class Lottery extends Component{
    static defaultProps = {
        title: 'Lottery',
        maxBalls: 7,
        maxNumber: 69,

    }    

    constructor(props){
        super(props);
        this.state = {
            numbers: Array.from({ length: this.props.maxBalls }),
        }
        this.runLottery = this.runLottery.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    runLottery(){
        console.log('Run Lottery called');
        this.setState(curState => ({
            numbers: curState.numbers.map(
                num => Math.floor(Math.random() * this.props.maxNumber) + 1)
        }));
    }

    handleClick(){
        this.runLottery();
    }

    render(){
        return(
            <section className="Lottery">
                <h1>{ this.props.title }</h1>
                <div className="ball-holder">
                    {this.state.numbers.map((number) => (<Ball number={number} />))}
                </div>
                <button
                    onClick={this.handleClick}>Run Loto</button>
            </section>
        )
    }
}


export default Lottery;