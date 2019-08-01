class Machine extends React.Component{
    render(){
        const props = this.props;
        const {s1, s2, s3, winMessage, loseMessage} = props;
        const winner = (s1 === s2) && (s2 === s3)
        return(
            <div>
                <div className="slot-container">
                    <span>{ s1 }</span>
                    <span>{ s2 }</span>
                    <span>{ s3 }</span>
                </div>
                <p>{winner ?  winMessage : loseMessage }</p> 
            </div>
        );
    }
}