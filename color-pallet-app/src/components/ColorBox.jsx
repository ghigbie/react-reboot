import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        const { name, background } = this.props
        return (
            <div 
                style={{backgroundColor: background }}
                className="ColorBox">
                <div className='copy-container'>
                    <div className="box-content">
                        <span>{name}</span>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <span className='see-more'>More</span>
                </div>
            </div>
        )
    }
}

export default ColorBox;