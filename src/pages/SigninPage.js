import React from 'react'

const SigninPage = () => {
  return (
    <div className='container'>
    <form>
    <br/>
    
    <div className="mb-3">
      <label for="exampleInputUsername" className="form-label">Username</label>
      <input type="text" className="form-control" placeholder='Username' id="exampleInputUsername" aria-describedby="emailHelp" />
     
    </div>
    <br/>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email</label>
      <input type="email" className="form-control" placeholder='email' id="exampleInputEmail1" />
    </div>
    <br/>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
    </div>
    <br/>
    <div className="mb-3">
      <label for="exampleInputPassword2" className="form-label">Re-Password</label>
      <input type="password" className="form-control" placeholder='Re-Password' id="exampleInputPassword2" />
    </div>
    <br/>
    <button type="submit" className="btn btn-success">Create</button>
    
    
    
  </form>
    </div>
  )
}

export default SigninPage
