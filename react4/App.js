import Mood;
import Number;
import YoBaby;

class App extends React.Component{
    render(){
        return(
            <div>
                <YoBaby name="baby"/>
                <Mood />
                <Number />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));