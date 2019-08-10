import React, { Component } from 'react';
import './dog-details.styles.css';

class DogDetails extends Component {
    render() {
        let { dog } = this.props;
        return (
            <div className="DogDetails">
                <h1>{ dog.name }</h1>
            </div>
        );
    }
}

export default DogDetails;