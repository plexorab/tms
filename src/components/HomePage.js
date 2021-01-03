import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import NavPage from './NavPage';

import './HomePage.css';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <NavPage />
        HomePage component goes here
      </div>
    );
  }
  
}

export default HomePage;
