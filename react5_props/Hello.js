class Hello extends React.Component{
    render(){
        const props = this.props;
        const exc = "!".repeat(props.bangs)
        return (
            <div>
                <h1>Hello {props.to} from {props.from} {exc}</h1>
            </div>
        );
    }
}