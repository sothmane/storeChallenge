function Navbar(props) {

    return <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand title" href="/public">NearbyStores</a>
            </div>
            <ul className="nav navbar-nav">
            <li><a href="/public/sign.html" className="glyphicon glyphicon-user"></a></li>
               
                </ul>
            <ul className="nav navbar-nav pull-right">
                <li><a href="/public" className="glyphicon glyphicon-map-marker"></a></li>
                <li><a href="#" className="glyphicon glyphicon-heart"></a></li>
            </ul>
        </div>
    </nav>;
}