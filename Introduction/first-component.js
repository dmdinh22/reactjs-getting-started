// FUNCTIONAL COMPONENT
// const Button = (props) => {
// return (
// 	<button>Go</button>
// 	);
// };

// CLASS COMPONENT
class Button extends React.Component {
    state = { counter: 0 };

    handleClick = () => {
        // this === component instance
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return <button onClick={this.handleClick}>{this.state.counter}</button>;
    }
}

ReactDOM.render(<Button />, mountNode);
