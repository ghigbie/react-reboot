class YoBaby extends React.Component{
    render(props){
        return(
            <div>
                <h1> Yo {this.props.name} !</h1>
                <h1> Yo {this.props.name} !</h1>
                <h1> Yo {this.props.name} !</h1>
            </div>
        )
    }
}

ReactDOM.render(<YoBaby name="moo"/>, document.getElementById('root'))