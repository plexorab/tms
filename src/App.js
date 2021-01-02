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
import NotFound from './components/NotFound';

import PrivateRoute from './helpers/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Router>
        <Switch>
          <PrivateRoute exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );



}

export default App;
