import React, { Component } from 'react';
import ReturnAnimal from './ReturnAnimal';

class Fish extends Component {
    render() {
        return(
            <div className="Fish">
                Bubbles!
                <ReturnAnimal/>
            </div>
        );
    }
}

export default Fish;