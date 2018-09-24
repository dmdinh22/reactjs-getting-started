const Card = props => {
    return (
        <div>
            <img src="http://placehold.it/75" />
            <div>
                <div>Name here</div>
                <div>Company Name here</div>
            </div>
        </div>
    );
};

ReactDOM.render(<Card />, mountNode);
