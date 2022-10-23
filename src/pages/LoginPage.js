import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'


const LoginPage = () => {

  let {loginUser}=useContext(AuthContext)
  
  return (
    <div className='container'>
    <form onSubmit={loginUser}>
    <br/>
    
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Username</label>
      <input type="text" className="form-control" placeholder='Username' name='username' id="exampleInputEmail1" aria-describedby="emailHelp" />
     
    </div>
    <br/>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" placeholder='Password' name='password' id="exampleInputPassword1" />
    </div>
    <br/>
    <button type="submit" className="btn btn-success">Submit</button>
    
    
    
  </form>
    </div>
  )
}

export default LoginPage
