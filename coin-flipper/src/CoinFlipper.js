import React , { Component } from  'react';
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component{
    static defaultProps = {
        coins: [
            {   
                alt: 'heads', 
                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'
            },
            {  
                alt: 'tails', 
                imgSrc: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'
            }
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            isCoin: false,
            currentCoin: 0,
            totalFlips: 0,
            heads: 0,
            tails: 0,
        }
        this.flipCoin = this.flipCoin.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        console.log('flipCoin called')
        let random = Math.floor(Math.random() * 2) 
        if(random === 0){
            this.setState( st => (
                {
                    heads: st.heads + 1,
                    currentCoin: random,
                    totalFlips: st.totalFlips +1,
                }));
        }else{
            this.setState((st) => (
                {
                    tails: st.tails + 1,
                    currentCoin: random,
                    totalFlips: st.totalFlips + 1,
                }));
        }
    }

    handleClick(e){
        this.flipCoin();
    }

    render(){
        return(
            <section className="CoinFlipper">
                <h1>Let's Flip a Coin</h1>
                {!this.state.isCoin
                ? (<button onClick={() => this.setState({ isCoin: true })}> Let's Play </button>)
                : (<div>
                        <div className="coin-container">
                            <Coin imgSrc={this.props.coins[this.state.currentCoin].imgSrc}
                                  alt={this.props.coins[this.state.currentCoin].alt} />
                        </div>
                        <button 
                            className="flip-button"
                            onClick={this.handleClick}>
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
