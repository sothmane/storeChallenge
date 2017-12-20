class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    handleLikeButton() {

        localStorage.setItem(this.props.id, JSON.stringify({
            id: this.props.id,
            time: (new Date()).getTime(),
            like: true
          })
        );
    }

    handleDislikeButton() {

        localStorage.setItem(this.props.id, JSON.stringify({
            id: this.props.id,
            time: (new Date()).getTime(),
            like: false
          })
        );

        this.props.update();

    }

    render() {

        return <div className="card col-md-2">
            <h3>{this.props.name} <span className="distance">{this.props.distance}M</span></h3>
            <img src={this.props.img} alt={this.props.name} />
            <div className="action-section">
                <Button click={this.handleDislikeButton.bind(this)} >Dislike</Button>
                <Button display={this.props.displayLike} click={this.handleLikeButton.bind(this)} >Like</Button>
            </div>
        </div>;
    }
}