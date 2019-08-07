import React, { Component } from 'react';
import ReturnAnimal from './ReturnAnimal';

class Dog extends Component {
    render() {
        return(
            <div className="Dog">
                Woof!
                <ReturnAnimal/>
            </div>
        );
    }
}

export default Dog;