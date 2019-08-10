import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import DogList from './../dog-list/dog-list.component';
import DogDetails from './../dog-details/dog-details.component';
import './routes.styles.css';

class Routes extends Component {
    render() {
        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
                dog => dog.name.toLowerCase() === name.toLowerCase());
            return <DogDetails {...props} dog={currentDog} />;
        }
        return (
                <Switch className="Routes">
                    <Route
                        exact
                        path="/dogs"
                        render={() => <DogList dogs={this.props.dogs} />}
                    />
                    <Route
                        exact
                        path="/dog/:name"
                        render={getDog}
                    />
                    <Redirect to='/dogs' />
                </Switch>
        );
    }
}

export default Routes;