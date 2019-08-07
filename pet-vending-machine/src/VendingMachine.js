import React, {Component} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';   
import './VendingMachine.css';

class VendingMachine extends Component{

    render(){
        render(
            <div className="VendingMachine">
                <h1>{ this.props.title } </h1>
                <br/>
                <h3>What kind of pet do you want?</h3>
                <br/>
                <br/>
                <nav>
                    <NavLink exact to="/dog" />
                    <NavLink exact to="/cat" />
                    <NavLink exact to='/rat' />
                    <NavLink exact to="/fish" />
                    <NavLink exact to="/smallcat" />
                </nav>
                <Switch>
                    <Route exact path='/' component={Base} />
                    <Route exact path='dog' component={Dog} />
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