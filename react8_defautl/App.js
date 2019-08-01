class App extends React.Component{
    render(){
        return (
            <div>
                <Hello 
                    to="Ringo"
                    bangs={5}
                />
                <Hello />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));