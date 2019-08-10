import React, {Component} from 'react';
import './dog-list.component';

class DogList extends Component{
    render(){
        return(
            <div className="DogList">
                {this.props.dogs}
            </div>
        );
    }
}

export default DogList;