import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.styles.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink 
                    className="navbar-brand"
                    to='/dogs'>
                    Dogs
                </NavLink>
            </nav>
        );
    }
}

export default Navbar;