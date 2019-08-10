import React, {Component} from 'react';
import './dog-list.styles.css';

class DogList extends Component{
    render(){
        return(
            <div className="DogList">
                <h1 className="display-1 text-center">Doggie List</h1>
                    <div className="container">
                        <div className='row'>
                        {this.props.dogs.map((dog) => (
                            <div className='Dog col-md-6 col-lg-4 text-center'>
                                <img src={dog.src}
                                     alt={dog.name} />
                                <h3>{dog.name}</h3>
                            </div>
                        ))}
                        </div>
                    </div>
            </div>
        );
    }
}

export default DogList;