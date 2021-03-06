import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './dog-list.styles.css';

class DogList extends Component{
    render(){
        return(
            <div className="DogList">
                <h1 className="display-3 text-center list-title">Doggie List</h1>
                        <div className='row'>
                        {this.props.dogs.map((dog, index) => (
                            <NavLink
                                exact 
                                key={index}
                                to={`/dog/${dog.name}`}
                                className='Dog col-md-6 col-lg-4 text-center'>
                                <div className='Dog text-center'>
                                    <img src={dog.src}
                                        alt={dog.name} />
                                    <h3 className="underline">{dog.name}</h3>
                                </div>
                            </NavLink>
                        ))}
                        </div>
            </div>
        );
    }
}

export default DogList;