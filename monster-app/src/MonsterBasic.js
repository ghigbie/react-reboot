import React, { Component } from 'react';
import './MonsterBasic.css';

class MonsterBasic extends Component{
    constructor(props){
        super(props);
        this.state = {
            monsters: []
        };
        this.loadMonsters = this.loadMonsters.bind(this)
    };

    loadMonsters(){
        fetch('https://jsonplaceholder.typicode.com/user')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users}))
    }

    render(){
        return(
            <div className="MonsterBasics">
                { this.state.monsters.map( monster => (
                    <h1 key={monster.id}>{ monster.name }</h1>
                ))}

            </div>
        );
    }
}

export default MonsterBasic;