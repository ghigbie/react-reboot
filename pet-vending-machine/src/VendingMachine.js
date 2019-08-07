import React, {Component} from React;
import './VendingMachine.css';

class VendingMachine extends Component{

    render(){
        render(
            <div className="VendingMachine">
                <h1>{ this.props.title } </h1>
                <br/>
                <h3>What kind of pet do you want?</h3>
                <Switch>
                    
                </Switch>
            </div>
        );
    }
}