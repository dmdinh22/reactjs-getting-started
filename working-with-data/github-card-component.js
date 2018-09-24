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

let data = [
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
];

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

ReactDOM.render(<CardList cards={data} />, mountNode);
