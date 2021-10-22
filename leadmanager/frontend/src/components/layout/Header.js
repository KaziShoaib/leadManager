import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { logout } from "../../reducers/authReducer"


const GuestLinks = () => {
  return (
    
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to='/register' className='nav-link'>
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/login' className='nav-link'>
          Login 
        </Link>                
      </li> 
    </ul>
    
  )
}

const AuthLinks = () => {
  const userData = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  return (
    
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">        
      <span className="navbar-text mr-3">
        <strong>{userData.isAuthenticated ? `Welcome ${userData.user.username}` : ''}</strong>
      </span>
      <li className="nav-item">
        <button className="nav-link btn btn-info btn-sm text-light" onClick = {() => dispatch(logout())}>
          Logout
        </button>               
      </li> 
    </ul>
    
  )
}

const Header = () => {
  const userData = useSelector(state => state.auth)

  return (
    <div className='container'>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">Lead Manager</a>
            {userData.isAuthenticated ? <AuthLinks /> : <GuestLinks />}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header