import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class ReturnAnimal extends Component{
    render(){
        return (
            <div className="Return">
                <br/>
                <Link to="/">Return This Animal</Link>
            </div>
        );
    }
}

export default ReturnAnimal;