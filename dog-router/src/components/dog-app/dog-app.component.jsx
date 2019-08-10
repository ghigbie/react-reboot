import React, { Component } from 'react';
import Navbar from './../navbar/navbar.component';
import DogList from './../dog-list/dog-list.component';
import DogDetails from './../dog-details/dog-details.component';
import {Switch, Route} from 'react-router-dom';
import whiskey from "./../images/whiskey.jpg";
import tubby from "./../images/tubby.jpg";
import hazel from "./../images/hazel.jpg";
import './dog-app.styles.css';

class DogApp extends Component {
    static defaultProps = {
        dogs: [
            {
                name: "Whiskey",
                age: 5,
                src: whiskey,
                facts: [
                    "Whiskey loves eating popcorn.",
                    "Whiskey is a terrible guard dog.",
                    "Whiskey wants to cuddle with you!"
                ]
            },
            {
                name: "Hazel",
                age: 3,
                src: hazel,
                facts: [
                    "Hazel has soooo much energy!",
                    "Hazel is highly intelligent.",
                    "Hazel loves people more than dogs."
                ]
            },
            {
                name: "Tubby",
                age: 4,
                src: tubby,
                facts: [
                    "Tubby is not the brightest dog",
                    "Tubby does not like walks or exercise.",
                    "Tubby loves eating food."
                ]
            }
        ]
    };
    render() {
        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
                dog =>dog.name.toLowerCase() === name.toLowerCase());
            return <DogDetails {...props} dog={currentDog} />;
        }
        return (
            <div className="DogApp">
                <Navbar />
                <Switch>
                    <Route 
                        exact
                        path="/dogs" 
                        render={() => <DogList dogs={this.props.dogs}/>}
                    />
                    <Route
                        exact
                        path="/dog/:name"
                        render={getDog}
                    />
                </Switch>
            </div>
        );
    }
}

export default DogApp;
