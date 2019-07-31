function getMood(){
    const moods = ['Happy', 'Very Happy', 'Super Positive', 'Awesome']
    return moods[Math.floor(Math.random() * moods.length)]
}


class MoodDisplay extends React.Component{
    render(){
        return (
            <div>
                <h1>My Current Mood is { getMood() }</h1>
            </div>
        );
    }
}

ReactDOM.render(<MoodDisplay />, document.getElementById('root'))