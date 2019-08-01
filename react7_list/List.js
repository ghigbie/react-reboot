class List extends React.Component{
    render(){
    const { title, thingsToLearn } = this.props;
    const listOfThings = thingsToLearn.map( thing => <li>thing</li>)
        return(
            <div>
                <h3>{ title }</h3>
                <ul>
                    { listOfThings }
                </ul>
            </div>
        );
    }
}