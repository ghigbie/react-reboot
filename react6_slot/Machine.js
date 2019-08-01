class Machine extends React.Component{
    render(){
        props = this.props;
        return(
            <div>
                <div class="slot-container">
                    <span>{ props.item1 }</span>
                    <span>{ props.item2 }</span>
                    <span>{ props.item3 }</span>
                </div>
                <p>{ props.message }</p>
            </div>
        );
    }
}