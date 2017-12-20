class App extends React.Component {
    
        constructor(props) {
            super(props);
    
            this.state = {
                stores: [],
                coords: []
            }
        }
    
        // calculating the distance between two points, current location and store location
    
        calculateDistance(a, b) {
            return (Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)) * 1000).toFixed(2);
        }
    
    
        // getting the current location of the user
    
        getCurrentLocation() {
    
            return new Promise((resolve, reject) => {
    
                navigator.geolocation.getCurrentPosition((position) => {
    
                    let coords = [position.coords.latitude, position.coords.longitude];
    
                    resolve(coords);
    
                });
    
            });
        }
    
        // calculating the time passed to show the disliked card
        isDislikeTimePassed(id) {
            
            let storedTime = JSON.parse(localStorage.getItem(id)).time;
    
            let currentTime = (new Date()).getTime();
    
            console.log(`current time ${currentTime}`);
            console.log(`stored time ${storedTime}`);
    
            let timePassed = ((currentTime - storedTime) / 1000) / 60;
    
            console.log(timePassed);
    
            if (timePassed >= 1)
                return false;
    
            return true;
        }
    
        // updating the card after performing an action like or dislike
        updateCard() {
    
            let filtrerStores = this.state.stores.filter((card) => {
    
                if (localStorage.getItem(card.props.id) && !JSON.parse(localStorage.getItem(card.props.id)).like && this.isDislikeTimePassed(card.props.id)) {
                    return false;
                }
    
                return true;
            });
    
            this.setState({
                stores: filtrerStores
            })
    
        }
    
        componentWillMount() {
    
            // getting the json file from the server to display it 
    
            fetch("http://localhost:3000/list").then((data) => data.json()).then((json) => {
    
                this.getCurrentLocation().then((coords) => {
    
                    let listStores = json.sort((a, b) => {
    
                        return this.calculateDistance(a.location.coordinates, coords) - this.calculateDistance(b.location.coordinates, coords);
    
                    }).map((element) => {
    
                        return <Card update={this.updateCard.bind(this)} key={element._id} id={element._id} distance={this.calculateDistance(element.location.coordinates, coords)} img={element.picture} name={element.name} />;
    
                    }).filter((card) => {
    
                        if (localStorage.getItem(card.props.id) && !JSON.parse(localStorage.getItem(card.props.id)).like && this.isDislikeTimePassed(card.props.id)) {
                            return false;
                        }
    
                        return true;
                    });
    
                    this.setState({
                        stores: listStores
                    })
    
                })
    
            });
    
        }
    
        render() {
            return <div className="container">
                <Navbar text="NearbyStores" />
                <div className="row">
    
                    {this.state.stores}
    
                </div>
            </div>;
        }
    
    }
    
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
    
    