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
        let rando = Math.floor(Math.random()* this.props.colors.length);
        let colors = this.props.colors.filter((color) => color !== this.state.currentColor);
        this.setState({
            currentColor: colors[rando]
        })
    };

    handleClick(e){
        this.changeColor();
    }

    render(){
        
        return(
            <div className="ColorBox"
                 style={{backgroundColor: this.state.currentColor,
                         color: this.state.currentColor === 'black' && 'white'}}
                 onClick={this.handleClick}>
                <h1>{ this.state.currentColor }</h1>
            </div>
        )
    }
}

export default ColorBox;