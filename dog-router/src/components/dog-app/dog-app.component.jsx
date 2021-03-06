import React, { Component } from 'react';
import Navbar from './../navbar/navbar.component';
import Routes from './../routes/routes.component';
import whiskey from "./../zzz-images/whiskey.jpg";
import tubby from "./../zzz-images/tubby.jpg";
import hazel from "./../zzz-images/hazel.jpg";
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
        return (
            <div className="DogApp">
                <Navbar dogs={this.props.dogs} />
                <div className="container">
                    <Routes dogs={this.props.dogs} />
                </div>
            </div>
        );
    }
}

export default DogApp;
