import React, {Component} from 'react';

class Food extends Component{
    render(){
        const name = this.props.match.params.name;
        const url = `https://source.unslpash.com/1600x900/?${this.props.match.params.name}`
        console.log('PARAMS', name);
        return(
            <div className="Food">
                <h1>Food Route</h1>
                <br/>
                <h3>I'm gonna eat {this.props.match.params.name }</h3>
                <img src={url} alt={this.props.match.params.name } />
            </div>
        );
    }
}

export default Food;