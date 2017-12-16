class Card extends React.Component{

    constructor(props){
        super(props);
    }

    render()
    {
        return <div className="card col-md-2">
            <h3>{this.props.name}</h3>
            <img src="http://via.placeholder.com/150x150" alt={this.props.name} />
            <div className="action-section">
                <Button>Dislike</Button>
                <Button>Like</Button>
            </div>
        </div>;
    }
}