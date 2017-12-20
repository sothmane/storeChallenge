class Favorite extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stores: [],
            coords: []
        }
    }

    // getting current location using the browser api 
    getCurrentLocation() {

        return new Promise((resolve, reject) => {

            navigator.geolocation.getCurrentPosition((position) => {

                let coords = [position.coords.latitude, position.coords.longitude];

                resolve(coords);

            });

        });
    }

    calculateDistance(a, b) {
        return (Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)) * 1000).toFixed(2);
    }

    // getting the current location of the user

    updateCard() {

        let filtrerStores = this.state.stores.filter((card) => {

            if (localStorage.getItem(card.props.id) && JSON.parse(localStorage.getItem(card.props.id)).like) {
                return true;
            }
            return false;
        });

        this.setState({
            stores: filtrerStores
        })

    }

    componentWillMount() {

        // getting the json file from the server to display it 

        fetch("http://192.168.1.7:3000/list").then((data) => data.json()).then((json) => {

            this.getCurrentLocation().then((coords) => {

                let listStores = json.map((element) => {

                    return <Card displayLike="none" update={this.updateCard.bind(this)} key={element._id} id={element._id} distance={this.calculateDistance(element.location.coordinates, coords)} img={element.picture} name={element.name} />;

                }).filter((card) => {

                    if (localStorage.getItem(card.props.id) && JSON.parse(localStorage.getItem(card.props.id)).like) {
                        return true;
                    }

                    return false;

                });

                this.setState({
                    stores: listStores
                })

            });

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
    <Favorite />,
    document.getElementById('root')
);

