import React, { Component } from 'react';
import { directive } from "@babel/types";

class Clicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    render(){
        return(
            <div>
                <h1>Number is {this.state.number}</h1>
                <br/>
                <br/>
                <button>Select Random Number</button>
            </div>
        );
    }
}

export default Clicker;