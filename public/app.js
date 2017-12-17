class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stores: [],
            coords: []
        }
    }

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

    componentWillMount() {
        
        // getting the json file from the server to display it 

        fetch("http://192.168.1.7:3000/list").then((data) => data.json()).then((json) => {

            this.getCurrentLocation().then((coords) => {

                let listStores = json.sort((a, b) => {

                    console.log(this.state.coords);

                    return this.calculateDistance(a.location.coordinates,coords) - this.calculateDistance(b.location.coordinates,coords);

                }).map((element) => {

                    return <Card key={element._id} distance={this.calculateDistance(element.location.coordinates,coords)} img={element.picture} name={element.name} />;

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

