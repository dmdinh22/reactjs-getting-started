class Button extends React.Component {
    handleClick = () => {
        // this === component instance
        this.props.onClickFunction(this.props.incrementValue);
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    }
}

const Result = props => {
    return <div>{props.counter}</div>;
};

class App extends React.Component {
    state = { counter: 0 };

    incrementCounter = incrementValue => {
        // this === component instance
        this.setState(prevState => ({
            counter: prevState.counter + incrementValue
        }));
    };

    render() {
        // pass the reference to the incrementCounter function down to the Button component props
        // via the onClickFunction property
        return (
            <div>
                <Button
                    incrementValue={1}
                    onClickFunction={this.incrementCounter}
                />
                <Button
                    incrementValue={5}
                    onClickFunction={this.incrementCounter}
                />
                <Button
                    incrementValue={10}
                    onClickFunction={this.incrementCounter}
                />
                <Button
                    incrementValue={100}
                    onClickFunction={this.incrementCounter}
                />
                <Result counter={this.state.counter} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
