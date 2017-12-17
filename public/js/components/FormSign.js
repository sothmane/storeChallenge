function FormSign() {
    
        return <form  method="post" action="http://localhost:3000/add">
         <h1> Sign UP</h1>
            <div className="form-group ">
    <label>Email address</label>
    <input type="email" name="email" className="form-control" placeholder="Enter email" />
  </div>
  <div className="form-group ">
    <label>Full Name</label>
    <input type="text" name="name" className="form-control" placeholder="Enter full name" />
  </div>
  <div className="form-group ">
    <label>password</label>
    <input type="password" name="pass" className="form-control" placeholder="password" />
  </div>
  
  <button type="submit" className="btn btn-primary">Sign UP</button>
  
        </form>;
    }