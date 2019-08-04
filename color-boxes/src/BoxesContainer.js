import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './BoxesContainer';

class BoxesContainer extends Component{
    static defaultProps = {
        colors: ['red', 'blue', 'green', 'orange', 'yellow', 'purple', 'violet',
                 'darkred', 'darkblue', 'darkgreen', 'teal', 'violet', 'grey',
                 'black', 'maroon', 'white', 'darkgrey', 'gold'],
    }

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="BoxesContainer">
            {
                this.props.colors.map((color) => (<ColorBox color={color} />))
            }
            </div>
        );
    }

}

export default BoxesContainer;