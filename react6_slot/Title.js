class Title extends React.Component{
    render(){
        const props = this.props;
        return(
            <div>
                <h1>{ props.title }</h1>
            </div>
        );
    }
}