class App extends React.Component{
    render(){
        return(
            <div>
                <Hello
                    to="Ringo"
                    from="George"
                    bangs={8}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));