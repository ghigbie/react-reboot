import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Food from './Food';
import FoodSearch from './FoodSearch';
import './RoutingParams.css'

class RoutingParams extends Component{
    render(){
        return(
            <div className="RoutingParams">
                <h1>{ this.props.title }</h1>
                <br/>
                <Switch>
                    <Route 
                        exact
                        path='/food/:name/'
                        render={ routeProps => <Food {...routeProps} />}
                    />
                </Switch>
                <br/>
                <FoodSearch />
            </div>
        );
    }
}

export default RoutingParams;