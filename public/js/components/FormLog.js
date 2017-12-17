function FormLog() {
    
        return <form method="post" action="http://localhost:3000/log">
         <h1> LogIN</h1>
            <div className="form-group ">
    <label>Email address</label>
    <input type="email" name="email" className="form-control" placeholder="Enter email" />
  </div>
 
  <div className="form-group ">
    <label>password</label>
    <input type="password" name="pass" className="form-control" placeholder="password" />
  </div>
 
  <button type="submit" className="btn btn-success">Log IN</button>
  
        </form>;
    }