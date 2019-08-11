import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component{
    render(){
        const colorBoxes = this.props.colors.map((color, index) => (
            <ColorBox 
                background={color.color} 
                name={color.name} 
                key={index}/>
        ));
        return(
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">
                { colorBoxes }
                {/* footer eventually */}
                </div>
            </div>
        )
    }
}

export default Palette;