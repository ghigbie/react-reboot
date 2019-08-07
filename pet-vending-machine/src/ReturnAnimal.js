import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class ReturnAnimal extends Component{
    render(){
        return (
            <div className="Return">
                <br/>
                <NavLink to="/">Return This Animal</NavLink>
            </div>
        );
    }
}

export default ReturnAnimal;