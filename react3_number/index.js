function getNumber(){
    return Math.floor(Math.random() * 10) +1;
}


class RandomNumber extends React.Component{
    render(numberChoice){
        return (
            <div>
                <h1>Your number is: { getNumber() }</h1>
                <h1>Only seven shows: 
            { getNumber() === this.props.numberChoice ? getNumber() : null}
                </h1>
            </div>
        );
    }
}

ReactDOM.render(<RandomNumber numberChoice=7 />, document.getElementById('root'))