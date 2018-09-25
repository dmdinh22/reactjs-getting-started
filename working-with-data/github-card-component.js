const Card = props => {
    return (
        <div>
            <img width="75" src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                    {props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

const CardList = props => {
    // using spread operator to spread the card object with all
    // the properties of card object available for card component
    return (
        <div>
            {props.cards.map(card => (
                <Card {...card} />
            ))}
        </div>
    );
};

class Form extends React.Component {
    state = { userName: '' };

    handleSubmit = e => {
        e.preventDefault();

        console.log('e: form submit', this.userNameInput.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={e => this.setState({ userName: e.target.value })}
                    placeholder="github handle"
                />
                <button type="submit">Add card</button>
            </form>
        );
    }
}

class App extends React.Component {
    state = {
        cards: [
            {
                name: "Paul O'Shannessy",
                avatar_url: 'https://avatars.githubusercontent.com/u/8445?v=3',
                company: 'Facebook'
            },
            {
                name: 'Ben Alpert',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/7585659?s=460&v=4',
                company: 'Facebook'
            }
        ]
    };

    render() {
        return (
            <div>
                <Form />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
