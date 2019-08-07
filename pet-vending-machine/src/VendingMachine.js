import React, {Component} from react;
import { Route, NavLink, Switch } from react-router;   
import './VendingMachine.css';

class VendingMachine extends Component{

    render(){
        render(
            <div className="VendingMachine">
                <h1>{ this.props.title } </h1>
                <br/>
                <h3>What kind of pet do you want?</h3>
                <Switch>
                    <Route exact path='/' component={Base} />
                </Switch>
            </div>
        );
    }
}