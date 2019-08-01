class Hello extends React.Component {
    static defaultProps = {
        to: 'Mr. Bill',
        from: 'Anonymous',
        bangs: 15
    };
    render() {
        const props = this.props;
        const exc = "!".repeat(props.bangs)
        return (
            <div>
                <h1>Hello {props.to} from {props.from} {exc}</h1>
            </div>
        );
    }
}