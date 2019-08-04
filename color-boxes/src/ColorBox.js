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
        console.log('Change color called');
    }

    handleClick(e){
        this.changeColor();
    }

    render(){
        return(
            <div className="ColorBox"
                 style={{backgroundColor: this.props.color,
                         color: this.props.color === 'black' && 'white'}}
                 onClick={this.handleClick}>
                <h1>{ this.props.color }</h1>
            </div>
        )
    }
}

export default ColorBox;