class Card extends React.Component{

    constructor(props){
        super(props);
    }

    handleLikeButton()
    {
        console.log("like Clicked");
    }

    handleDislikeButton()
    {
        console.log("dislike Clicked")
    }

    render()
    {
        return <div className="card col-md-2">
            <h3>{this.props.name} <span className="distance">{this.props.distance}M</span></h3>
            <img src={this.props.img} alt={this.props.name} />
            <div className="action-section">
                <Button click={this.handleDislikeButton.bind(this)} >Dislike</Button>
                <Button click={this.handleLikeButton.bind(this)} >Like</Button>
            </div>
        </div>;
    }
}