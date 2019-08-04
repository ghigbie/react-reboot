import React , { Component } from  'react';
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component{
    static defaultProps = {
        headsUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
        tailsUrl: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'
    }
    constructor(props){
        super(props);
        this.state = {
            isCoin: false,
            isHeads: null,
            totalFlips: 0,
            heads: 0,
            tails: 0,
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin(){
        console.log('flipCoin called')
        random = Math.floor(Math.random() * 2) +1
        this.setState({

        })
    }

    render(){
        return(
            <section className="CoinFlipper">
                <h1>Let's Flip a Coin</h1>
                {!this.state.isCoin
                ? (<button onClick={() => this.setState({ isCoin: true })}> Start </button>)
                : (<div>
                        <div className="coin-container">
                            <Coin imgSrc={isHeads ? this.props.headsUrl : this.props.tailsUrl } />
                        </div>
                        <button 
                            className="flip-button"
                            onClick={this.flipCoin}>
                            Flip Coin
                        </button>
                        <div className="counter">
                            Out of {this.state.totalFlips}, there have been {this.state.heads} heads and {this.state.tails} tails.
                        </div>
                  </div>)}
            </section>
        );
    }
}

export default CoinFlipper;
