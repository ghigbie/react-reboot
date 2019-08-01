class App extends React.Component{
    render(){
        const wimMessage = 'You Win!';
        const loseMessage = 'You Lose : (';
        return(
            <div>
                <Title title="The World's Dumbest Slot Machine" />
                <Machine
                    item1="x"
                    item2="y"
                    item3="x"
                    message={loseMessage}
                />
                <Machine
                    item1="y"
                    item2="y"
                    item3="x"
                    message={loseMessage}
                />
                <Machine
                    item1="x"
                    item2="x"
                    item3="x"
                    message={wimMessage}
                />
            </div>
        )
    }
    <Title title="The World's Dumbest Slot Machine"/>
    <Machine
        item1="x"
        item2="y"
        item3="x"
    />

}