import React, { Component } from 'react';
import './Pokecard.css'

const POKE_API = 'https://raw.githubbusercontent.com/PokeAPI/spites/master/sprites/pokemon/';

class Pokecard extends Component{
    render(){
        const props = this.props;
        let imgSrc = `${POKE_API}${props.id}.png`
        return(
            <div className="Pokecard">
                <h1> {props.name} </h1>
                <img 
                    src={imgSrc} 
                    alt={props.name}/>
                <div>Type: {props.type}</div>
                <div>Exp: {props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;