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
        console.log(this.props.colors);
        console.log('Change color called');
        const colors = this.props.colors.filter((color) => color != color);
    };

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