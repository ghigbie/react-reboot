import React, {Component} from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
 import './RoutingParams.css'

class RoutingParams extends Component{
    render(){
        return(
            <div className="RoutingParams">

                <Switch>
                    <Route 
                        exact
                        path='/food/:name/'
                        render={routeProps => <Food {...routeProps} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default RoutingParams;