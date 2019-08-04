import React, { Component } from 'react';
import './ColorBox.css'

class ColorBox extends Component{
    static defaultProps = {
        color: 'purple',
        fontColor: 'white'
    }

    constructor(props){
        super(props);
        this.state = {
            currentColor: this.props.color,
        };
        this.handleClick = this.handleClick.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){

    }

    handleClick(e){

    }

    render(){
        return(
            <div className="ColorBox"
                 style={{backgroundColor: this.props.color,
                         color: this.props.color === 'black' && 'white'}}
                 onClick="handleClick">
                <h1>{ this.props.color }</h1>
            </div>
        )
    }
}

export default ColorBox;