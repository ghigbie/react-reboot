import React, { Component } from 'react';
import ReturnAnimal from './ReturnAnimal';

class SmallCat extends Component {
    render() {
        return(
            <div className="SmallCat">
                Just joking! I'm a lion. Roar!
                <ReturnAnimal/>
            </div>
        );
    }
}

export default SmallCat;