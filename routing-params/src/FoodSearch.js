import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
        };
        this.handelChange = this.handelChange.bind(this);
    }
    handelChange(e){
        this.setState({query: e.target.value})
    }
    render() {
        return (
            <div className="Foodsearch">
                <h3>Search for Food</h3>
                <input 
                    type="text" 
                    placeholder="Food..."
                    value={this.state.query}
                    onChange={this.handelChange}
                    />
                <Link to={`/food/${this.state.query}`}>Gooooooo!</Link>
                <br/>
                <h2>{ this.state.query }</h2>


            </div>
        );
    }
}

export default FoodSearch;