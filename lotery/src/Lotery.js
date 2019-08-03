import React, { Component } from 'react';
import './Lottery.css';

class Lottery extends Component{
    constructor(props){
        super(props);
        state = {
            numbers: [],
        }
        this.runLottery = this.runLottery.bind(this);
    }
    static defaultProps = {
        type: 6,
        maxNumber: 40
    }

    runLottery(){
        
        this.setState({numbers: []});
    }

    render(){
        return(
            <div className="Lotery">
                <Ball number={8} />
            </div>
        )
    }
}


export default Lottery;