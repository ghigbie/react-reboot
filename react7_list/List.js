class List extends React.Component{
    render(){
    const { title, list } = this.props;
    const listOfThings = list.map( thing => <li>{thing}</li>)
        return(
            <div>
                <h3>{ title }:</h3>
                <ul>
                    { listOfThings }
                </ul>
                <h3>Second list:</h3>
                <ul>
                    { list.map(thing => <li>{thing}</li>)}
                </ul>
            </div>
        );
    }
}