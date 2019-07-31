function getNumber(){
    return Math.floor(Math.random() * 10) +1;
}


class RandomNumber extends React.Component{
    render(){
        const number = getNumber();
        let msg;
        if(number === 7 ){
            msg = 'yo!'
        }else{
            msg = 'no!'
        }
        return (
            <div>
                <h1>Your number is: { number }</h1>
                <h1>Did you win?
                {number === 7 ? ' Congrats' : ' Sorry'}
                </h1>
                {
                    number === 7 && <img src="http://placekitten.com/g/200/300"/>
                }
                <h2>{ msg }</h2>
            </div>
        );
    }
}

ReactDOM.render(<RandomNumber />, document.getElementById('root'))