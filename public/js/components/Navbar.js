function Navbar(props) {

    return <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand title" href="#">NearbyStores</a>
            </div>
            <ul className="nav navbar-nav pull-right">
                <li><a href="#" className="glyphicon glyphicon-map-marker"></a></li>
                <li><a href="#" className="glyphicon glyphicon-heart"></a></li>
            </ul>
        </div>
    </nav>;
}