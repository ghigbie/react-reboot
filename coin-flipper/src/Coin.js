import React , { Component } from 'react';
import './Coin.css';

class Coin extends Component {

    render(){
        return(
            <div className="Coin">
                <img className="coin-image"
                     src={this.props.imgSrc} 
                     alt={this.props.alt}/>
            </div>
        );
    }
}

export default Coin;