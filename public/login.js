class Sign extends React.Component {
    
        render() {
            return <div className="container">
                <Navbar text="NearbyStores"/>
                <div className="row">
                   <div className="col-md-6">
                   <FormSign />
                     </div> 
                     <div className="col-md-6">
                     <FormLog />
                         </div>
                </div>
                </div>;
        }
    
    }
    
    ReactDOM.render(
        <Sign />,
        document.getElementById('root')
    );
    
    