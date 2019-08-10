import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.styles.css';

class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map((dog, index) => (
            <li>
                <NavLink 
                    exact 
                    to={`/dog/${dog.name}`}>
                    {dog.name}
                </NavLink>
            </li>
        ));
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink 
                    className="navbar-brand"
                    to='/dogs'>
                    Dogs
                </NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink exact to='/dogs' className='nav-link'>
                                Home
                             </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;