class App extends React.Component{
    render(){
        return(
            <div>
                <List 
                    title="List of things to Learn"
                    list={['React', 'Redux', 'React Native']}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));