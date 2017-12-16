class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stores: [],
            test: null
        }
    }

    componentWillMount(){
        // getting the json file from the server to display it 

        fetch("http://192.168.1.7:3000/list").then((data)=>data.json()).then((json)=>{

            let listStores = json.map((element)=>{

                return <Card key={element._id} name={element.name} />;

            });

            this.setState({
                stores: listStores
            })

        });

    }

    render() {
        return <div className="container">
            <Navbar text="NearbyStores"/>
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

