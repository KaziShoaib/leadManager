import React from "react"
import { Link, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { useField } from "../../hooks"
import { login } from "../../reducers/authReducer"

const Login = () => {
  const dispatch = useDispatch()
  
  const {field: username, reset: resetUsername} = useField('text')
  const {field: password, reset: resetPassword} = useField('password')

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(login(username.value, password.value))
    resetUsername()
    resetPassword()
  }

  const userData = useSelector(state => state.auth)
  if(userData.isAuthenticated){
    return (
      <Redirect to='/' />
    )
  }

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5"> 
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              {...username}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input                
              className="form-control"
              {...password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>            
        </form>
      </div>
    </div>
  )

}

export default Login