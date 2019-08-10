import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './routes.styles.css';

class Routes extends Component {
    static defaultProps = {
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
                </Switch>
        );
    }
}

export default Routes;