import React, { Component } from 'react';
import ReturnAnimal from './ReturnAnimal';

class Rat extends Component {
    render() {
        return(
            <div className="Rat">
                Squeak!
                <ReturnAnimal />
            </div>
        );
    }
}

export default Rat;