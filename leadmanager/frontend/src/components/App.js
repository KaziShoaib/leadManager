import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { loadUser } from '../reducers/authReducer'

import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'
import Login from './accounts/Login'
import Register from './accounts/Register'


const App = () => {  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  const userData = useSelector(state => state.auth)

  return (
    <div>
      <Router>
        <Header />
        <Alerts />
        <div className="container">
          <Switch>
            <Route exact path='/'>
              {userData.isAuthenticated ? <Dashboard/> : <Login/>}
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/register'>
              <Register/>
            </Route>
          </Switch>
        </div>
      </Router>              
    </div>
  )
}


export default App;