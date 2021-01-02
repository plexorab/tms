import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

import PrivateRoute from './helpers/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <PrivateRoute exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
        
      </div>
    </Router>
  );

  

}

export default App;
