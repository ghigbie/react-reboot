class App extends React.Component{
    render(){
        return(
            <div>
                <YoBaby name="baby"/>
                <Mood />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));