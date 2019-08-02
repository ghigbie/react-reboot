import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', exp: 62},
            {id: 7, name: 'Squirtle', type: 'wate', exp: 62},
            {id: 11, name: 'Metapod', type: 'bu', exp: 62},
            {id: 12, name: 'Butterfree', type: 'flying', exp: 62},
            {id: 25, name: 'Pikachu', type: 'electric', exp: 62},
            {id: 39, name: 'Jigglypuff', type: 'normal', exp: 62},
            {id: 94, name: 'Gengar', type: 'poison', exp: 62},
            {id: 133, name: 'Eevee', type: 'nomal', exp: 62},
        ]
    };
    render(){
        const pokemons = this.props.pokemon.map((pokemon) => (
           <Pokecard 
                id={pokemon.id} 
                name={pokemon.name} 
                type={pokemon.type}
                exp={pokemon.exp}/>
        ));
        return(
            <div class="Pokedex">
                <h1>Pokedex!</h1>
                { pokemons }
            </div>
        );
    }
}

export default Pokedex;