import React, { Component } from 'react';
import ReturnAnimal from './ReturnAnimal';

class Cat extends Component {
    render() {
        return(
            <div className="Cat">
                Meow!
                <ReturnAnimal/>
            </div>
        );
    }
}

export default Cat;