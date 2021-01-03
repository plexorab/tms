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
import LogoutPage from './components/LogoutPage';
import ClientsPage from './components/ClientsPage';
import NotFound from './components/NotFound';

import PrivateRoute from './helpers/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div>
    <Router>
        <Switch>
          <PrivateRoute exact path='/' component={HomePage} />
          <PrivateRoute exact path='/clients' component={ClientsPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/logout' component={LogoutPage} />
          <Route component={NotFound} />
        </Switch>
    </Router>
    </div>
  );

}

export default App;
