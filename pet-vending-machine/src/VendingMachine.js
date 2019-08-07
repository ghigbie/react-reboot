import React, {Component} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';   
import Base from './Base';
import Cat from './Cat';
import Dog from './Dog';
import Fish from './Fish';
import Rat from './Rat';
import SmallCat from './SmallCat';

import './VendingMachine.css';

class VendingMachine extends Component{

    render(){
        return (
            <div className="VendingMachine">
                <h1>{ this.props.title } </h1>
                <br/>
                <h3>What kind of pet do you want?</h3>
                <br/>
                <br/>
                <nav>
                    <NavLink exact to="/dog">Dog</NavLink>
                    <NavLink exact to="/cat">Cat</NavLink>
                    <NavLink exact to='/rat'>Rat</NavLink>
                    <NavLink exact to="/fish">Fish</NavLink>
                    <NavLink exact to="/smallcat">Small Cat</NavLink>
                </nav>
                <br />
                <br />
                <Switch>
                    <Route exact path='/' component={Base} />
                    <Route exact path='/dog' component={Dog} />
                    <Route exact path='/cat' component={Cat} />
                    <Route exact path='/rat' component={Rat} />
                    <Route exact path='/fish' component={Fish} />
                    <Route exact path='/smallcat' component={SmallCat} />
                </Switch>
            </div>
        );
    }
}

export default VendingMachine;