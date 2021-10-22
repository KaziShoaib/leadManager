import React from "react"
import { Link, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { useField } from "../../hooks"
import { register } from "../../reducers/authReducer"

const Register = () => {
  const {field: username, reset: resetUsername} = useField('text')
  const {field: email, reset: resetEmail} = useField('text')
  const {field: password, reset: resetPassword} = useField('password')
  const {field: password2, reset: resetPassword2} = useField('password')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: 'CLEAR_MESSAGES'
    })
    if(!email.value || !username.value || !password.value || !password2.value){
      dispatch({
        type: 'CREATE_MESSAGE',
        data: {
          status: -1,
          message: {
            blankField: 'fill up all the fields'
          }
        }
      })
    }
    else if(password.value !== password2.value){
      dispatch({
        type: 'CREATE_MESSAGE',
        data: {
          status: -1,
          message: {
            passwordMismatch: 'Passwords do not match'
          }
        }
      })
    }
    else{
      const newUserObject = {
        username: username.value,
        password: password.value,
        email: email.value
      }
      dispatch(register(newUserObject))
      resetUsername()
      resetPassword()
      resetEmail()
    }    
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
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              {...username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input                
              className="form-control"
              {...email} 
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
            <label>Confirm Password</label>
            <input
              className="form-control"
              {...password2}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>            
        </form>
      </div>
    </div>
  )

}


export default Register