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

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // return (
  //   <div className="App">
  //     <LoginPage />
  //   </div>
  // );
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
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
