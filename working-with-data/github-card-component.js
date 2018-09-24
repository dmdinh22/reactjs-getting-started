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
    return (
        <div>
            <Card
                name="Paul O'Shannessy"
                avatar_url="https://avatars.githubusercontent.com/u/8445?v=3"
                company="Facebook"
            />
        </div>
    );
};

ReactDOM.render(<CardList />, mountNode);
