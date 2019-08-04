import React, { Component } from 'react';
import './ColorBox.css'

class ColorBox extends Component{
    static defaultProps = {
        color: 'purple',
        fontColor: 'white'
    }
    render(){
        return(
            <div className="ColorBox"
                 style={{backgroundColor: this.props.color,
                         color: this.props.color === 'black' && 'white'}}>
                <h1>{ this.props.color }</h1>
            </div>
        )
    }
}

export default ColorBox;