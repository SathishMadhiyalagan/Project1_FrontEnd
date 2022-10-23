import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import AuthContext from '../context/AuthContext';


const Header = () => {

  let {user,logoutUser}= useContext(AuthContext);
  return (
    <div>

    <nav className="navbar navbar-expand-lg bg-light" style={{'backgroundColor':'#5837D0'}}>
    <div className='container'> 
    {user ? (<div className="container-fluid nav1">
            
        
    <Link className="navbar-brand TextWhite" to="/">Home</Link>

    
    <div className='navRight'>

    <Link className="nav-link TextWhite marginText" href="#">About</Link>

    <Link className="nav-link TextWhite marginText" href="#">Disabled</Link>

    <Link className="nav-link TextWhite marginText" to="#">Profile</Link>

    <Link className="btn nav-link TextWhite marginText" onClick={logoutUser} to='#'>LogOut</Link>

        
        

    </div>
    

</div>):(<div className="container-fluid nav1">
            
        
    <Link className="navbar-brand TextWhite" to="/">Home</Link>

    
    <div className='navRight'>

        <Link className="nav-link TextWhite marginText" to='login/'>Login</Link>

        <Link className="nav-link TextWhite marginText" to="signup">SignIn</Link>

        <Link className="nav-link TextWhite marginText" href="#">About</Link>

        <Link className="nav-link TextWhite marginText" href="#">Disabled</Link>

    </div>
    

</div>)}
    
        </div>   
    </nav>
    <div className='container'>
    {user && <h2>Hello {user.username}</h2>}
      
    </div>
    
      
    </div>
  )
}

export default Header
