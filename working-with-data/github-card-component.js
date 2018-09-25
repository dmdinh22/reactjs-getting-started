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

        // ajax... (fetch or axios)
        axios
            .get(`https://api.github.com/users/${this.state.userName}`)
            .then(res => {
                // access the onSubmit prop passed down into Form component to invoke
                // the function reference for addNewCard of Form component
                this.props.onSubmit(res.data);
            });
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

    // function to be passed as a ref as part of the props object for Form Component
    addNewCard = cardInfo => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
