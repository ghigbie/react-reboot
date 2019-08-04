import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './BoxesContainer';

class BoxesContainer extends Component{
    static defaultProps = {
        colors: ['red', 'blue', 'green', 'orange', 'yellow', 'purple', 'violet',
                 'darkred', 'darkblue', 'darkgreen', 'teal', 'violet', 'grey',
                 'black', 'maroon', 'white', 'darkgrey', 'gold'],
    }
    render(){
        return(
            <div className="BoxesContainer">
            {this.props.colors.map((color, index) => (
                <ColorBox 
                    color={color} 
                    colors={this.props.colors} 
                    key={index}/>))}
            </div>
        );
    }

}

export default BoxesContainer;