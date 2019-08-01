class App extends React.Component{
    render(){
        const winMessage = 'You Win!';
        const loseMessage = 'You Lose : (';
        return(
            <div>
                <Title title="The World's Dumbest Slot Machine" />
                <Machine
                    s1="x"
                    s2="y"
                    s3="x"
                    winMessage={winMessage}
                    loseMessage={loseMessage}
                />
                <Machine
                    s1="y"
                    s2="y"
                    s3="x"
                    winMessage={winMessage}
                    loseMessage={loseMessage}
                />
                <Machine
                    s1="x"
                    s2="x"
                    s3="x"
                    winMessage={winMessage}
                    loseMessage={loseMessage}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));